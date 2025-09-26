// lib/strings.ts
// =============================
export const strings = {
  notifications: {
    core: [
      "Pause for one breath?",
      "Feel your feet on the floor = instant anchor.",
      "What do you notice right now?",
      "How can you Honor your needs in this moment?",
      "Give yourself a mini-break",
      "Hit the Pause button with me",
      "What's one tiny step you can take now?",
      "Try a 60-second reset?",
      "Name one thing that’s going well.",
      "Sound Anchor: Listen to one nearby sound... and one far away.",
      "What's hat’s most important here?",
      "How can you be kind to yourself right now?",
      "You can return to your PATH anytime.",
    ],
    morning: [
      "Begin soft: one slow inhale, longer exhale.",
      "Set your anchor for the day (breath, touch, or sound).",
      "What do you need to feel supported this morning?",
    ],
    midday: [
      "Micro-PATH in a minute?",
      "Check body signals: sip water, stretch, breathe.",
      "Name your mood in one word.",
    ],
    evening: [
      "Unwind with one gentle pause.",
      "Lay down the day: what’s one thing to honor?",
      "If your mind’s busy, tune in for 60s.",
    ],
    playful: [
      "If your energy were weather, what’s the forecast?",
      "Animal check: today’s vibe is…?",
      "Color scan: notice one color near you.",
    ],
    celebration: [
      "Every pause matters.",
      "Tiny step, real shift.",
      "You honored yourself today.",
    ],
    boundarySafe: [
      "No pressure—support is here if you want it.",
      "Trust your wisdom. Practice at your own pace",
      "When you’re ready, I’m ready.",
    ],
  },
  empty: {
    library: {
      title: "Your PATH is ready.",
      body: "Start with Micro-PATH or revisit any core practice.",
      ctaA: "Micro-PATH (1 min)",
      ctaB: "Browse Core Practices",
    },
    favorites: {
      title: "Pin your go-tos.",
      body: "Pick a favorite anchor and action to keep them one tap away.",
      cta: "Choose My Defaults",
    },
    log: {
      title: "Your steps will show up here.",
      body: "After any practice, you’ll see gentle progress—not scores.",
      cta: "Do Micro-PATH now",
    },
    reminders: {
      title: "Want gentle invites?",
      body: "Add 1 reminder. You can change or mute anytime.",
      ctaA: "Add Midday Invite",
      ctaB: "No thanks",
    },
    offline: {
      title: "Save a quick reset offline.",
      body: "Cache the 1-minute Micro-PATH for spotty signal.",
      cta: "Download (2 MB)",
    },
    firstRun: {
      title: "Start here.",
      body: "PATH works best linearly the first time. You’ll unlock the library after.",
      cta: "Begin Week 1: Pause",
    },
  },
  errors: {
    audioPlay: {
      title: "Cannot play audio.",
      body: "Playback failed. Try again or use transcript.",
      actions: ["Retry", "Open transcript", "Report"],
    },
    download: {
      title: "Download interrupted.",
      body: "We couldn’t finish caching this practice.",
      actions: ["Retry", "Use streaming", "Cancel"],
    },
    offline: {
      title: "No connection.",
      body:
        "You’re offline. Micro-PATH works offline; other content will load when back.",
      actions: ["Open Micro-PATH", "Retry"],
    },
    notifications: {
      title: "Notifications off.",
      body: "To receive gentle invites, allow notifications.",
      actions: ["Enable in Settings", "Maybe later"],
    },
    reminders: {
      title: "Reminder not scheduled.",
      body: "We couldn’t set that invite.",
      actions: ["Try again", "Pick a new time"],
      tooMany: {
        title: "Too many reminders.",
        body: "Let’s keep it light. Try 1–3 per day.",
        actions: ["Adjust schedule", "Okay"],
      },
    },
    sync: {
      title: "Couldn’t save your log.",
      body: "Your practice will sync when online.",
      actions: ["Okay", "Sync now"],
    },
    auth: {
      title: "Session expired.",
      body: "Please sign in to continue.",
      actions: ["Sign in", "Cancel"],
    },
    storage: {
      title: "Low storage.",
      body: "Not enough space to cache audio. Stream instead?",
      actions: ["Stream", "Manage storage"],
    },
    a11y: {
      title: "Animations limited.",
      body: "Reduced Motion is on. We’ll keep visuals calm.",
      actions: ["Okay", "Change in Settings"],
    },
  },
};
