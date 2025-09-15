// =============================================================
// lib/storage.ts (AsyncStorage helpers)
// =============================================================
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = {
  ANCHOR: 'avoidance_anchor_v1',
  LOOPS: 'avoidance_loops_v1',
  DRAFTS: 'avoidance_drafts_v1',
  PLANS: 'avoidance_plans_v1',
  REFLECTIONS: 'avoidance_reflections_v1',
};

export async function saveAnchor(anchor: { label: string; note?: string }) {
  await AsyncStorage.setItem(KEY.ANCHOR, JSON.stringify(anchor));
}
export async function getAnchor() {
  const v = await AsyncStorage.getItem(KEY.ANCHOR);
  return v ? JSON.parse(v) : null;
}

export async function saveLoop(loop: { label: string; steps: string[] }) {
  const all = (await getLoops()) || [];
  const withId = { id: Date.now().toString(), ...loop };
  all.push(withId);
  await AsyncStorage.setItem(KEY.LOOPS, JSON.stringify(all));
  return withId;
}
export async function getLoops() {
  const v = await AsyncStorage.getItem(KEY.LOOPS);
  return v ? JSON.parse(v) : [];
}

export async function saveDraft(draft: { text: string; createdAt: number; tag?: string }) {
  const all = (await getDrafts()) || [];
  all.push({ id: Date.now().toString(), ...draft });
  await AsyncStorage.setItem(KEY.DRAFTS, JSON.stringify(all));
}
export async function getDrafts() {
  const v = await AsyncStorage.getItem(KEY.DRAFTS);
  return v ? JSON.parse(v) : [];
}

export async function savePlan(plan: { title: string; steps: string[]; createdAt: number }) {
  const all = (await getPlans()) || [];
  all.push({ id: Date.now().toString(), ...plan });
  await AsyncStorage.setItem(KEY.PLANS, JSON.stringify(all));
}
export async function getPlans() {
  const v = await AsyncStorage.getItem(KEY.PLANS);
  return v ? JSON.parse(v) : [];
}

export async function saveReflection(reflection: { text: string; createdAt: number; tag?: string }) {
  const all = (await getReflections()) || [];
  all.push({ id: Date.now().toString(), ...reflection });
  await AsyncStorage.setItem(KEY.REFLECTIONS, JSON.stringify(all));
}
export async function getReflections() {
  const v = await AsyncStorage.getItem(KEY.REFLECTIONS);
  return v ? JSON.parse(v) : [];
}

//  storage.ts
//  
//
//  Created by Carrie Wilson on 8/24/25.
//

