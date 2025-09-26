// app/(routes)/defaults.tsx – pick go‑to anchor/action
// =============================
import { useState } from "react";
import { View, Text, Pressable } from "react-native";


const anchors = ["Breath", "Feet", "Touch", "Sound", "Sight", "Movement"];
const actions = ["Breath x3", "Sip water", "Kind phrase", "Stretch", "1‑line note"];


export default function DefaultsScreen() {
const [anchor, setAnchor] = useState<string | null>(null);
const [action, setAction] = useState<string | null>(null);
return (
<View className="flex-1 p-6">
<Text className="text-2xl font-bold">Choose your defaults</Text>
<Text className="text-base text-zinc-600 mt-1">Used for Quick PATH</Text>


<Text className="mt-6 mb-2 text-lg font-semibold">Anchor</Text>
<View className="flex-row flex-wrap gap-2">
{anchors.map((a) => (
<Pressable
key={a}
onPress={() => setAnchor(a)}
className={`px-4 py-2 rounded-2xl border ${
anchor === a ? "bg-emerald-600 border-emerald-600" : "border-zinc-300"
}`}
>
<Text className={anchor === a ? "text-white" : "text-zinc-900"}>{a}</Text>
</Pressable>
))}
</View>


<Text className="mt-6 mb-2 text-lg font-semibold">Action</Text>
<View className="flex-row flex-wrap gap-2">
{actions.map((a) => (
<Pressable
key={a}
onPress={() => setAction(a)}
className={`px-4 py-2 rounded-2xl border ${
action === a ? "bg-emerald-600 border-emerald-600" : "border-zinc-300"
}`}
>
<Text className={action === a ? "text-white" : "text-zinc-900"}>{a}</Text>
</Pressable>
))}
</View>


<Pressable className="mt-auto bg-zinc-900 rounded-2xl px-5 py-3">
<Text className="text-white text-base font-semibold">Save</Text>
</Pressable>
</View>
);
}