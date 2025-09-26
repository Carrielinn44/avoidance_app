// lib/progress.ts – simple linear unlock & day math
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DayItem, PATH_PROGRAM, PROGRAM_LENGTH_DAYS, WeekPlan } from "@/data/program";


const KEY = {
START: "path.startDateISO",
DAY_INDEX: "path.dayIndex", // 0..27 if using manual advancement
COMPLETED: "path.completed", // boolean flag for linear run finished
};


export type TodayPayload = {
weekIdx: number; // 0..3
dayOfWeek: number; // 0..6 (0 = Day1 intro)
plan: WeekPlan;
item: DayItem; // today’s prompt
linearLocked: boolean; // if user hasn’t reached this yet
};


export async function ensureStartDate() {
const existing = await AsyncStorage.getItem(KEY.START);
if (existing) return new Date(existing);
const now = new Date();
await AsyncStorage.setItem(KEY.START, now.toISOString());
return now;
}


export async function setCompletedDone() {
await AsyncStorage.setItem(KEY.COMPLETED, "1");
}

export async function getCompleted(): Promise<boolean> {
return (await AsyncStorage.getItem(KEY.COMPLETED)) === "1";
}


export function indexToWeekDay(idx: number) {
const weekIdx = Math.floor(idx / 7);
const dayOfWeek = idx % 7; // 0..6
return { weekIdx, dayOfWeek };
}


export function clampIndex(i: number) {
if (i < 0) return 0;
if (i >= PROGRAM_LENGTH_DAYS) return PROGRAM_LENGTH_DAYS - 1;
return i;
}


export async function getTodayByElapsedDays(now = new Date()): Promise<number> {
const startISO = await AsyncStorage.getItem(KEY.START);
if (!startISO) return 0;
const start = new Date(startISO);
const ms = now.getTime() - start.getTime();
const days = Math.floor(ms / (1000 * 60 * 60 * 24));
return clampIndex(days);
}


export async function setManualDayIndex(idx: number) {
await AsyncStorage.setItem(KEY.DAY_INDEX, String(clampIndex(idx)));
}


export async function getManualDayIndex(): Promise<number | null> {
const v = await AsyncStorage.getItem(KEY.DAY_INDEX);
return v ? clampIndex(parseInt(v, 10)) : null;
}


export async function getTodayPayload(): Promise<TodayPayload> {
const completed = await getCompleted();
const manual = await getManualDayIndex();
const idx = completed ? (manual ?? (await getTodayByElapsedDays())) : await getTodayByElapsedDays();
const { weekIdx, dayOfWeek } = indexToWeekDay(idx);
const plan = PATH_PROGRAM[weekIdx];
const item = dayOfWeek === 0 ? plan.day1 : plan.variations[dayOfWeek - 1];
const linearLocked = !completed && idx < 0; // placeholder if you want to lock future days
return { weekIdx, dayOfWeek, plan, item, linearLocked };
}


// Call after user completes Day7 of Week4
export async function markProgramComplete() {
await setCompletedDone();
}