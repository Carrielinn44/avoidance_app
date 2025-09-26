// src/screens/avoidance/LoopBuilder.js
// =============================================================
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { colors } from "@/lib/colors";
import { saveLoop } from "@/lib/storage";



const templates = {
A: ["I notice I’m avoiding", "I stay close for one breath", "I say, ‘I see you.’"],
B: ["I notice I’m avoiding", "I reach for my object/stone", "I breathe through my nose"],
C: ["I notice I’m avoiding", "I write one line in my journal", "I remind myself, ‘This is a pattern, not a flaw.’"]
};


export default function LoopBuilder() {
const [choice, setChoice] = useState('A');
const [custom, setCustom] = useState(['', '', '']);


async function onSave() {
const steps = choice === 'CUSTOM' ? custom : templates[choice];
const loop = { label: choice === 'CUSTOM' ? 'My Gentle Return' : `Loop ${choice}`, steps };
await saveLoop(loop);
navigation.navigate('MyLoopsAndNotes');
}


return (
<View style={lbStyles.container}>
<View style={lbStyles.card}>
<Text style={lbStyles.title}>Build Your Gentle Loop</Text>
<Text style={lbStyles.subtitle}>Pick a template or create your own 3-step loop.</Text>


<View style={lbStyles.row}>
{['A', 'B', 'C', 'CUSTOM'].map(k => (
<TouchableOpacity key={k} style={[lbStyles.pill, choice === k && lbStyles.pillActive]} onPress={() => setChoice(k)}>
<Text style={lbStyles.pillText}>{k}</Text>
</TouchableOpacity>
))}
</View>


{choice !== 'CUSTOM' ? (
<View style={{ marginTop: 12 }}>
{templates[choice].map((s: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, i: React.Key | null | undefined) => (
<Text key={i} style={lbStyles.step}>• {s}</Text>
))}
</View>
) : (
<View style={{ marginTop: 12 }}>
{custom.map((v, i) => (
<TextInput
key={i}
style={lbStyles.input}
placeholder={`Step ${i + 1}…`}
placeholderTextColor={colors.textDim}
value={v}
onChangeText={(t) => setCustom(prev => prev.map((p, idx) => idx === i ? t : p))}
/>
))}
</View>
)}


<TouchableOpacity style={[lbStyles.btn, lbStyles.btnPrimary]} onPress={onSave}>
<Text style={lbStyles.btnText}>Save Loop</Text>
</TouchableOpacity>
</View>
</View>
);
}


const lbStyles = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
card: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 16 },
title: { color: colors.text, fontSize: 20, fontWeight: '600' },
subtitle: { color: colors.textDim, marginTop: 4 },
row: { flexDirection: 'row', gap: 8, marginTop: 12 },
pill: { borderWidth: 1, borderColor: colors.border, borderRadius: 24, paddingHorizontal: 12, paddingVertical: 6 },
pillActive: { backgroundColor: '#0b3b2e' },
pillText: { color: colors.text },
step: { color: colors.text, marginBottom: 6 },
input: { color: colors.text, borderColor: colors.border, borderWidth: 1, borderRadius: 12, padding: 10, marginBottom: 8 },
btn: { paddingVertical: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: colors.border, marginTop: 16 },
btnPrimary: { backgroundColor: '#0b3b2e' },
btnText: { color: colors.text, fontWeight: '600' }
});