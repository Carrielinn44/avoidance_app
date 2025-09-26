// components/EmptyState.tsx
// =============================
import React = require('react');
import { View, Text, Pressable } from "react-native";
import { clsx } from "clsx";

export function EmptyState({
    title,
    body,
    primary,
    secondary,
    onPrimary,
    onSecondary,
    }: {
    title: string,
    body: string,
    primary?: string,
    secondary?: string,
    onPrimary?: () => void,
    onSecondary?: () => void,
    }) { 

return (
    <View className="p-6 items-center justify-center"> 
        <Text className="text-xl font-semibold text-center text-zinc-900 dark:text-zinc-100">{title}</Text>
        <Text className="text-base text-center mt-2 text-zinc-600 dark:text-zinc-300">{body}</Text>
            <View className="mt-4 flex-row gap-3">
                {primary && (
                <Pressable onPress={onPrimary} className="px-4 py-2 rounded-2xl bg-zinc-900 dark:bg-zinc-100">
                    <Text className="text-white dark:text-zinc-900 text-base">{primary}</Text>
                </Pressable>
                )}
                    {secondary && (
                <Pressable
                    onPress={onSecondary}
                    className={clsx(
                        "px-4 py-2 rounded-2xl border",
                        "border-zinc-300 dark:border-zinc-600"
                    )}
                >
                    <Text className="text-base text-zinc-800 dark:text-zinc-100">{secondary}</Text>
                </Pressable>
                )}
            </View>
        </View>
    );
}