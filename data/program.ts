// data/program.ts – PATH curriculum map (Weeks 1–4)
export type StepKey = "Pause" | "Anchor" | "Tune In" | "Honor";


export type DayItem = {
title: string; // short label for today card
prompt: string; // 1–2 line prompt
deepLink?: string; // optional route to open a guided practice
};


export type WeekPlan = {
step: StepKey;
day1: DayItem; // intro + home base
variations: DayItem[]; // days 2–7
};


export const PATH_PROGRAM: WeekPlan[] = [
{
step: "Pause",
day1: {
title: "Intro + Home Base",
prompt: "Learn Pause: story + science, then guided practice.",
deepLink: "/lessons/pause-intro",
},
variations: [
{ title: "Breath Pause", prompt: "Take 3 slow breaths. Notice before/after.", deepLink: "/quick/pause-breath" },
{ title: "Sensory Pause", prompt: "See 3, feel 2, hear 1.", deepLink: "/quick/pause-senses" },
{ title: "Movement Pause", prompt: "Roll shoulders or stretch for 30s.", deepLink: "/quick/pause-move" },
{ title: "Gratitude Pause", prompt: "Name one thing you’re grateful for.", deepLink: "/quick/pause-gratitude" },
{ title: "Sound Pause", prompt: "Notice one near + one far sound.", deepLink: "/quick/pause-sound" },
{ title: "Celebration Pause", prompt: "Say ‘I paused.’ Smile or nod.", deepLink: "/quick/pause-celebrate" },
],
},
{
step: "Anchor",
day1: {
title: "Intro + Home Base",
prompt: "Choose a sensory anchor and return gently.",
deepLink: "/lessons/anchor-intro",
},

variations: [
{ title: "Breath Anchor", prompt: "Rest attention on inhale/exhale.", deepLink: "/quick/anchor-breath" },
{ title: "Touch Anchor", prompt: "Hand on heart or thighs—feel contact.", deepLink: "/quick/anchor-touch" },
{ title: "Sight Anchor", prompt: "Soft gaze on one object—notice 3 details.", deepLink: "/quick/anchor-sight" },
{ title: "Sound Anchor", prompt: "One nearby sound, one far.", deepLink: "/quick/anchor-sound" },
{ title: "Movement Anchor", prompt: "Sway/plant feet—feel steady.", deepLink: "/quick/anchor-move" },
{ title: "Choose Your Anchor", prompt: "Pick your favorite anchor today.", deepLink: "/quick/anchor-favorite" },
],
},
{
step: "Tune In",

day1: {
title: "Intro + Home Base",
prompt: "Observe body, emotion, thoughts—ask ‘What do I need?'",
deepLink: "(Path)/lessons/tune_in",
},
variations: [
{ title: "Body Scan", prompt: "Head to toe: what do you notice?", deepLink: "/quick/tune-body" },
{ title: "Emotion Name", prompt: "Name what’s here—even ‘unsure’ is ok.", deepLink: "/quick/tune-emotion" },
{ title: "Thought Clouds", prompt: "Watch thoughts drift for 30s.", deepLink: "/quick/tune-thoughts" },
{ title: "Need Check", prompt: "Ask: ‘What do I need right now?’", deepLink: "/quick/tune-need" },
{ title: "Value Check", prompt: "Ask: ‘What’s most important here?’", deepLink: "/quick/tune-values" },
{ title: "Compassion Add", prompt: "Whatever you notice, add: ‘And that’s okay.’", deepLink: "/quick/tune-compassion" },
],
},
{
step: "Honor",
day1: {
title: "Intro + Home Base",
prompt: "Choose one small action that honors your need.",
deepLink: "/lessons/honor-intro",
},
variations: [
{ title: "Micro‑Movement", prompt: "30s stretch, wiggle, or walk.", deepLink: "/quick/honor-move" },
{ title: "Self‑Kindness", prompt: "Say one kind phrase to yourself.", deepLink: "/quick/honor-kind" },
{ title: "Boundary", prompt: "Practice one small ‘no’ or limit.", deepLink: "/quick/honor-boundary" },
{ title: "Nourishment", prompt: "Sip water, snack, or deep breath.", deepLink: "/quick/honor-nourish" },
{ title: "Connection", prompt: "Reach out or send a kind text.", deepLink: "/quick/honor-connect" },
{ title: "Celebrate", prompt: "Name one win—even ‘I paused.’", deepLink: "/quick/honor-celebrate" },
],
},
];


export const PROGRAM_LENGTH_DAYS = PATH_PROGRAM.length * 7; // 28