
import "./global.css";
import React = require('react');

// app/_layout.tsx
import { Stack } from "expo-router";
import { useColorScheme, StatusBar } from "react-native";
import { vars } from "nativewind";
import { LIGHT, DARK } from "@/lib/theme/tokens";

export default function RootLayout() {
  const scheme = useColorScheme() ?? "light";
  vars(scheme === "dark" ? DARK : LIGHT);

return (
    <>
        <StatusBar hidden={true} />

        <Stack>
            <Stack.Screen
                name="(avoidance)"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    </>
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