// app/(routes)/index.tsx – Home (example)
// =============================
import { View, Text } from "react-native";
import { MicroPathButton } from "../../components/MicroPathButton";


export default function Home() {
return (
    <View className="flex-1 p-6 gap-4">
        <Text className="text-2xl font-bold">Welcome back</Text>
        <MicroPathButton />
    </View>
);
}