
// app/(routes)/today.tsx – Today Page
import { View, Text, Pressable, ActivityIndicator, ScrollView, TextInput } from "react-native";
import { useToday } from "@/hooks/useToday";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import { MicroPathButton } from "@/components/MicroPathButton";
import { Card } from "@/components/ui/Card";
import React from "react";
import { completePractice } from "@/lib/practice";
import { useState } from "react";
import { saveInsight } from "@/lib/insights";


export default function TodayScreen() {
    const { loading, today, refresh } = useToday();

    const [insight, setInsight] = useState("");
    const [saved, setSaved] = useState(false);


    if (loading || !today) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator />
                <Text className="mt-2 text-zinc-600">Loading today…</Text>
            </View>
        );
    }

    const { plan, item, weekIdx, dayOfWeek } = today;
    const weekLabel = `${plan.step}`;
    const dayLabel = dayOfWeek === 0 ? "Day 1" : `Day ${dayOfWeek + 1}`;


return (
    <ScrollView className="flex-1 p-6" contentContainerStyle={{ paddingBottom: 40 }}>
        <Text className="text-2xl font-bold">Today</Text>
        <Text className="text-base text-zinc-600 mt-1">{weekLabel} • {dayLabel}</Text>

        <Card>
            <Text className="text-lg font-semibold">{item.title}</Text>
            <Text className="text-base text-zinc-600 mt-1">{item.prompt}</Text>
            <View className="mt-4 flex-row gap-3">
                {item.deepLink && (
                <Pressable
                    className="px-4 py-2 rounded-xl bg-indigo-600"
                    onPress={async () => { 
                        try { 
                            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        } catch {} 
                        if (item.deepLink) {
                            router.push(item.deepLink as any);
                        }
                    }}
                >
                        <Text className="text-white font-bold">Open Practice</Text>
                </Pressable>
                )}
                <MicroPathButton />
            </View>
        </Card>
{/* Quick Insight */}
<View className="mt-5 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
  <Text className="text-lg font-semibold">Add an insight</Text>
  <Text className="text-base text-zinc-600 mt-1">
    Jot one line about what stood out today. Optional, quick, and helpful.
  </Text>

  <TextInput
    placeholder="One line that captures your takeaway…"
    placeholderTextColor="#9ca3af"
    multiline
    numberOfLines={3}
    className="mt-3 min-h-[72px] p-3 rounded-2xl border border-zinc-300 text-base text-zinc-900 dark:text-zinc-100"
    value={insight}
    onChangeText={setInsight}
  />

  <View className="mt-3 flex-row gap-3">
    <Pressable
      onPress={async () => {
        const sourceId = `${plan.step}-day${dayOfWeek + 1}`;
        if (!insight.trim()) return;
        try { await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); } catch {}
        await saveInsight({ sourceId, text: insight });
        setInsight("");
        setSaved(true);
        setTimeout(() => setSaved(false), 1500);
      }}
      className="px-4 py-2 rounded-2xl bg-emerald-600"
    >
      <Text className="text-white font-semibold">Save insight</Text>
    </Pressable>

    {saved ? (
      <View className="px-3 py-2 rounded-2xl bg-emerald-50 border border-emerald-200">
        <Text className="text-emerald-700">Saved ✓</Text>
      </View>
    ) : null}
  </View>
</View>

        <View className="mt-6 gap-3">
            <Pressable
                className="px-4 py-2 rounded-2xl border border-zinc-300"
                onPress={async () => { await completePractice({ type: "today" }); await refresh(); }}
            >
                <Text className="text-base">Mark today complete</Text>
            </Pressable>
            <Pressable
                onPress={async () => { await Haptics.selectionAsync(); router.push(`/weeks/${weekIdx+1}`); }}
                className="px-4 py-2 rounded-2xl border border-zinc-300"
            >
                <Text className="text-base">View this week</Text>
            </Pressable>
            <Pressable
                onPress={refresh}
                className="px-4 py-2 rounded-2xl border border-zinc-300"
            >
                <Text className="text-base">Refresh</Text>
            </Pressable>
            
        </View>
    </ScrollView>
);
}

