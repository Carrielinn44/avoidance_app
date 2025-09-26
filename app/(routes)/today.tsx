
// app/(routes)/today.tsx – Today Page
import { View, Text, Pressable, ActivityIndicator, ScrollView } from "react-native";
import { useToday } from "../../hooks/useToday";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import { MicroPathButton } from "../../components/MicroPathButton";
import { Card } from "@/components/ui/Card";


export default function TodayScreen() {
    const { loading, today, refresh } = useToday();


    if (loading || !today) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator />
                <Text className="mt-2 text-zinc-600">Loading today…</Text>
            </View>
        );
    }


    const { plan, item, weekIdx, dayOfWeek } = today;
    const weekLabel = `Week ${weekIdx + 1} — ${plan.step}`;
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
                    onPress={async () => { try { await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);} catch {} ; router.push(item.deepLink); }}
                >
                        <Text className="text-white font-bold">Open Practice</Text>
                </Pressable>
                )}
                <MicroPathButton />
            </View>
        </Card>


        <View className="mt-6 gap-3">
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

