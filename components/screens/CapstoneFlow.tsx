import { Pressable, View, Text, ScrollView } from "react-native";
import { MicroPathButton } from "../MicroPathButton";
import { strings } from "@/lib/strings";
import { EmptyState } from "../EmptyState";
import { router } from "expo-router";
import { useNotificationRotation } from "@/hooks/useNotificationRotation";
import React from "react";

// screens/CapstoneFlow.tsx (Expo Router routes as example)
export function IntegrationPracticeScreen() {
// Replace with real audio player; keeping it simple for scaffold
return (
    <View className="flex-1 p-6 gap-4">
        <Text className="text-xl font-semibold">PATH Integration Practice</Text>
        <Text className="text-base text-zinc-600">Guided 10–12 min • Pause ▸ Anchor ▸ Tune In ▸ Honor</Text>
        <Pressable onPress={() => router.replace("./success")} className="mt-auto bg-indigo-600 rounded-2xl px-5 py-3">
            <Text className="text-white text-base font-semibold">Finish (demo)</Text>
        </Pressable>
    </View>
);
}


export function SuccessScreen() {
const { scheduleDaily } = useNotificationRotation();
return (
    <View className="flex-1 p-6 gap-5">
        <Text className="text-2xl font-bold">You walked the full PATH.</Text>
        <Text className="text-base text-zinc-600">Save the 1‑minute version for everyday use.</Text>
        <MicroPathButton />
        <Pressable onPress={() => router.push("/defaults")} className="border border-zinc-300 rounded-2xl px-5 py-3">
            <Text className="text-base">Pick my go‑to anchor & action</Text>
        </Pressable>
        <Pressable onPress={() => scheduleDaily(12, 0)} className="border border-zinc-300 rounded-2xl px-5 py-3">
            <Text className="text-base">Enable one daily invite (12:00)</Text>
        </Pressable>
    </View>
);
}


export function LibraryScreen() {
return (
    <ScrollView className="p-6">
        <Text className="text-2xl font-bold">PATH Library</Text>
        <Text className="text-base text-zinc-600 mt-1">Core Practices • Quick Access • Deep Dives</Text>
        <View className="mt-4">
            <EmptyState
                title={strings.empty.library.title}
                body={strings.empty.library.body}
                primary={strings.empty.library.ctaA}
                secondary={strings.empty.library.ctaB}
                onPrimary={() => router.push("/micro-path")}
                onSecondary={() => router.push("/(avoidance)/core" as any)}
            />
        </View>
    </ScrollView>
);
}