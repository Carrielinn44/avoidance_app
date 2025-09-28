// lib/progress.ts – participation‑based advancement (no FOMO)
// =============================
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PATH_PROGRAM, PROGRAM_LENGTH_DAYS, WeekPlan, DayItem } from "@/data/program";


const KEY = {
    START: "path.startDateISO",
    DAY_INDEX: "path.dayIndex", // 0..27 current position
    COMPLETED: "path.completed", // boolean linear run finished
    LAST_ADVANCE_DAY: "path.lastAdvanceDay", // YYYY-MM-DD (America/Los_Angeles)
};


export type TodayPayload = {
    weekIdx: number; // 0..3
    dayOfWeek: number; // 0..6 (0 = Day1 intro)
    plan: WeekPlan;
    item: DayItem; // today’s prompt
    linearLocked: boolean; // reserved for future gating
    index: number; // absolute day index 0..27
};


function clampIndex(i: number) {
    if (i < 0) return 0;
    if (i >= PROGRAM_LENGTH_DAYS) return PROGRAM_LENGTH_DAYS - 1;
    return i;
}


function getLocalDayKey(date = new Date(), timeZone = "America/Los_Angeles") {
// Format like 2025-09-27 using IANA tz; fallback to local if tz unsupported
    try {
        const fmt = new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" });
        return fmt.format(date); // en-CA gives YYYY-MM-DD
    } catch {
        return new Date(date).toISOString().slice(0, 10);
    }
}


export async function ensureStartDate() {
    const existing = await AsyncStorage.getItem(KEY.START);
        if (existing) return new Date(existing);
    const now = new Date();
        await AsyncStorage.setItem(KEY.START, now.toISOString());
// initialize index to 0 on first run
        await AsyncStorage.setItem(KEY.DAY_INDEX, "0");
    return now;
}


export async function getIndex(): Promise<number> {
    const v = await AsyncStorage.getItem(KEY.DAY_INDEX);
    return v ? clampIndex(parseInt(v, 10)) : 0;
}


export async function setIndex(i: number) {
    await AsyncStorage.setItem(KEY.DAY_INDEX, String(clampIndex(i)));
}


export async function getCompleted(): Promise<boolean> {
    return (await AsyncStorage.getItem(KEY.COMPLETED)) === "1";
}


export async function markProgramComplete() {
    await AsyncStorage.setItem(KEY.COMPLETED, "1");
}


export function indexToWeekDay(idx: number) {
    const weekIdx = Math.floor(idx / 7);
    const dayOfWeek = idx % 7; // 0..6
    return { weekIdx, dayOfWeek };
}


export async function getTodayPayload(): Promise<TodayPayload> {
    const idx = await getIndex();
    const { weekIdx, dayOfWeek } = indexToWeekDay(idx);
    const plan = PATH_PROGRAM[weekIdx];
    const item = dayOfWeek === 0 ? plan.day1 : plan.variations[dayOfWeek - 1];
    return { weekIdx, dayOfWeek, plan, item, linearLocked: false, index: idx };
}


// ---- Participation advancement API ----
// Call this when the user completes *any qualifying practice for the day*.
// Ensures only one advancement per calendar day in America/Los_Angeles.
export async function advanceOnParticipation(now = new Date()) {
    const completed = await getCompleted();
    const idx = await getIndex();
        if (completed || idx >= PROGRAM_LENGTH_DAYS - 1) return; // already done or last day


    const todayKey = getLocalDayKey(now);
    const lastKey = (await AsyncStorage.getItem(KEY.LAST_ADVANCE_DAY)) || "";
        if (todayKey === lastKey) return; // already advanced today


    const next = clampIndex(idx + 1);
        await setIndex(next);
        await AsyncStorage.setItem(KEY.LAST_ADVANCE_DAY, todayKey);


        if (next === PROGRAM_LENGTH_DAYS - 1) {
        await markProgramComplete();
    }
}

// Optional: allow admins/tests to undo last advance
export async function undoAdvance() {
    const idx = await getIndex();
    await setIndex(clampIndex(idx - 1));
}