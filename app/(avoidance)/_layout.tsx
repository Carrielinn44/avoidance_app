import { Tabs } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';


const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <View>
               <Image source={icon} tintColor="#151312" className="size-4" />
                <Text className="text-accent text-base font-semibold m-2">{title}</Text>
             </View>
        );
    }

    return (
        <View className="size-full justify-center items-center m-4 rounded-full">
            <Image source={icon} tintColor="#A8B5DB" className="size-4" />
        </View>
    );
}

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: "#000",
                    borderRadius: 10,
                    marginHorizontal: 5,
                    marginBottom: 5,
                    height: 52,
                    position: "absolute",
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "#0F0D23",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title="Home"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="action-plan"
                options={{
                    title: 'Action Plan',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                            title="Action Plan"
                        />

                    ),
                }}
            />

            <Tabs.Screen
                name="support-hub"
                options={{
                    title: 'Support Hub',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.save}
                            title="Support Hub"
                        />
                    ),
                }}
            />
            
        </Tabs>
    );
}
export default _Layout