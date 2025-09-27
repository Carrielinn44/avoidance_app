
import "./global.css";
import React from 'react';

// app/_layout.tsx
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useColorScheme } from "nativewind";
//import { LIGHT, DARK } from "@/lib/theme/tokens";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@/components/primitives/portal";
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function RootLayout() {
    const colorSchemeObj = useColorScheme();
    const scheme = typeof colorSchemeObj === 'string'
        ? colorSchemeObj
        : colorSchemeObj?.colorScheme ?? 'light';
    const router = useRouter();
useEffect(() => {
    const sub = Notifications.addNotificationResponseReceivedListener((resp) => {
    const deepLink = resp.notification.request.content.data?.deepLink as string | undefined;
        if (deepLink) router.push("/(routes)/micro-path");
    });
    return () => sub.remove();
}, []);
    return (
        <SafeAreaProvider>
            <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
                <>
                    <StatusBar hidden={true} />
                    <Stack screenOptions={{
                        headerShown: false,
                    }}>
                        <Stack.Screen
                            name="(avoidance)"
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="(path)"
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="(routes)"
                            options={{
                                headerShown: false,
                            }}
                        />
                        <PortalHost />
                    </Stack>
                </>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}


//return (
//  <ThemeProvider>
//   <View>
//      <Background>
//        <Stack screenOptions={{ headerShown: false }} />
//        <PortalHost />
//      </Background>
//   </View>
//  </ThemeProvider>
// );
//}