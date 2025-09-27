import { useLocalSearchParams } from "expo-router";
import { PATH_PROGRAM } from "@/data/program";
import { Text, ScrollView } from "react-native";
import React from "react";



export default function WeekOverview() {
const { id } = useLocalSearchParams<{ id: string }>();
const idx = Math.max(1, Math.min(4, parseInt(id || "1", 10))) - 1;
const plan = PATH_PROGRAM[idx];
return (
<ScrollView className="flex-1 p-6">
<Text className="text-2xl font-bold">Week {idx+1} — {plan.step}</Text>
<Text className="text-base text-zinc-600 mt-1">Overview & practices</Text>
{/* Map plan.day1 + plan.variations here */}
</ScrollView>
);
}


// -----------------------------------------------------------
// Notes:
// - This Today page auto-computes Week/Day from a stored start date.
// - On first launch, we set the start date; later you can expose a manual picker
// or advance logic when a user completes a day.
// - After you mark the program complete, you can let users set a manual day index
// to revisit content, while Today still shows a selected focus.
// - Replace deepLink routes with your actual screens.
// - Persist completion events to flip `completed` and unlock the library.
// -----------------------------------------------------------