export type PathStep = "pause" | "anchor" | "tuneIn" | "honor";


export interface DailyPrompt {
week: number;
day: number;
step: PathStep;
title: string;
prompt: string;
}


// Simple static map; you can replace with dynamic content or CMS
export const pathSchedule: DailyPrompt[] = [
{ week: 1, day: 1, step: "pause", title: "Pause Intro", prompt: "Begin your PATH journey: learn to pause and notice the loop." },
{ week: 1, day: 2, step: "pause", title: "Breath Pause", prompt: "Pause and take 3 slow breaths. Notice how your body feels before and after." },
{ week: 1, day: 3, step: "pause", title: "Sensory Pause", prompt: "Pause and notice 3 things you can see, 2 you can feel, 1 you can hear." },
// ... add all prompts from program design ...
{ week: 2, day: 1, step: "anchor", title: "Anchor Intro", prompt: "Learn to steady with an anchor — breath, feet, or sound." },
// continue filling Week 2–4 prompts
];


export function getPromptForDay(dayIndex: number): DailyPrompt | undefined {
return pathSchedule.find((p) => p.day === dayIndex);
}