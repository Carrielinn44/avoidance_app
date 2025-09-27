// components/MicroPathButton.tsx
// =============================
import { Pressable, Text } from "react-native";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React from "react";


export function MicroPathButton() {
return (
<Pressable
onPress={async () => {
try { await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);} catch {}
router.push("/micro-path");
}}
className="rounded-xl bg-cyan-700 active:bg-cyan-800 px-5 py-3"
>
<Text className="text-white text-base font-semibold">Quick PATH (1 min)</Text>
</Pressable>
);
}