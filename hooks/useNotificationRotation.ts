// hooks/useNotificationRotation.ts
// =============================
import * as Notifications from "expo-notifications";
import { useEffect, useMemo, useRef, useState } from "react";
import { AppState } from "react-native";
import * as Haptics from "expo-haptics";
import { strings } from "../lib/strings";


// naive in-memory rotation; replace with persisted index as needed
function pickMessage(pool: string[], recent: string[]) {
    const candidates = pool.filter((m) => !recent.includes(m));
    return (candidates.length ? candidates : pool)[
        Math.floor(Math.random() * pool.length)
    ];
}

export function useNotificationRotation() {
    const [permission, setPermission] = useState<Notifications.NotificationPermissionsStatus | null>(
        null
    );
    const recentRef = useRef<string[]>([]);


    useEffect(() => {
        Notifications.requestPermissionsAsync().then(({ status }) => {
            setPermission(status as any);
        });

        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowBanner: true,
                shouldShowList: true,
                shouldPlaySound: false,
                shouldSetBadge: false,
            }),
        });

    }, []);


// schedule one daily invite at user-chosen time (default 12:00)
    async function scheduleDaily(hour = 12, minute = 0) {
        if (permission !== "granted") return null;
        const msg = pickMessage(strings.notifications.core, recentRef.current);
        recentRef.current = [msg, ...recentRef.current].slice(0, 5);


        return Notifications.scheduleNotificationAsync({
            content: {
                title: msg,
                body: "Open • Snooze • Dismiss",
                data: { deepLink: "/micro-path" },
            },
            trigger: { 
                hour, 
                minute, 
                repeats: true },

            
        });
    }


    async function sendCelebration() {
        if (permission === null) return null; 
                if (permission !== 'granted') return null;
        const msg = pickMessage(strings.notifications.celebration, []);
        await Notifications.scheduleNotificationAsync({
            content: { title: msg, data: { deepLink: "/library" } },
            trigger: null,
        
        });
        try { await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);} catch {}
    }


    return { scheduleDaily, sendCelebration, permission };
}