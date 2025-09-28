// app/(routes)/micro-path.tsx (Expo Router)
// =============================
import { View, Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";
import { useNotificationRotation } from "@/hooks/useNotificationRotation";
import React from "react";
import { completePractice } from "@/lib/practice";


export default function MicroPathScreen() {
const { sendCelebration } = useNotificationRotation();
return (
<View className="flex-1 p-6 gap-4">
<Text className="text-xl font-semibold">Micro‑PATH (1‑minute reset)</Text>
<Text className="text-base text-zinc-600">Pause → Anchor → Tune In → Honor</Text>
<Pressable
className="mt-4 rounded-2xl bg-zinc-900 px-5 py-3"
onPress={async () => {
    await completePractice({ type: "micro" });
try { await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);} catch {}
// TODO: run the 60s sequence; here we fake completion
await sendCelebration();
}}
>
<Text className="text-white text-base font-semibold">Start (demo)</Text>
</Pressable>
</View>
);
}