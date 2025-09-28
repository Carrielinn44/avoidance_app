import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import { pathSchedule, getPromptForDay } from "@/lib/pathSchedule";
import { router } from "expo-router";
import React from "react";


export default function TodayScreen() {
// In production: base on actual start date + progress
const [dayIndex, setDayIndex] = useState(2); // demo: day 2
const prompt = getPromptForDay(dayIndex);


if (!prompt) {
return (
<View className="flex-1 p-6 items-center justify-center">
<Text className="text-xl font-semibold">No prompt scheduled</Text>
<Text className="text-base text-zinc-600 mt-2">You’ve completed all current lessons.</Text>
</View>
);
}


return (
<View className="flex-1 p-6 gap-6">
<Text className="text-2xl font-bold">Today’s Focus</Text>
<View className="rounded-2xl bg-zinc-100 dark:bg-zinc-800 p-5">
<Text className="text-lg font-semibold mb-2">{prompt.title}</Text>
<Text className="text-base text-zinc-700 dark:text-zinc-200">{prompt.prompt}</Text>
</View>
<Pressable
onPress={() => router.push("/micro-path")}
className="rounded-2xl bg-emerald-600 px-5 py-3"
>
<Text className="text-white text-base font-semibold">Do Today’s Practice</Text>
</Pressable>
</View>
);
}