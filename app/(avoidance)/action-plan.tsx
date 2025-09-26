import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../lib/colors';
import { savePlan } from '../../lib/storage';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/Button';


export default function ActionPlan() {
const router = useRouter();
const [title, setTitle] = useState('');
const [steps, setSteps] = useState(['', '', '']);


function updateStep(i: number, v: string) { setSteps(prev => prev.map((s, idx) => (idx === i ? v : s))); }


async function onSave() {
if (!title.trim()) return;
const cleaned = steps.filter(s => s.trim());
await savePlan({ title: title.trim(), steps: cleaned, createdAt: Date.now() });
setTitle(''); setSteps(['', '', '']);
router.push('/(avoidance)/my-loops-and-notes');
}


return (
<View style={ap.container}>
<View style={ap.card}>
<Text style={ap.title}>Create a Micro Action Plan</Text>
<Text style={ap.subtitle}>Make the first step tiny and kind.</Text>


<Text style={ap.label}>Title</Text>
<TextInput style={ap.input} value={title} onChangeText={setTitle} placeholder="e.g., Email Sam about the meeting" placeholderTextColor={colors.textDim} />


<Text style={ap.label}>Steps</Text>
{steps.map((s, i) => (
<TextInput key={i} style={ap.input} value={s} onChangeText={(v) => updateStep(i, v)} placeholder={`Step ${i + 1}…`} placeholderTextColor={colors.textDim} />
))}


<TouchableOpacity className="rounded-xl bg-cyan-700 active:bg-cyan-800 hover:bg-cyan-950 px-5 py-3" onPress={onSave}>
<Text className='text-white font-bold'>Save Plan</Text>
</TouchableOpacity>
<Button variant='default'>
    <Text className='text-white'>Test</Text>
</Button>
</View>
</View>
);
}


const ap = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
card: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 16 },
title: { color: colors.text, fontSize: 20, fontWeight: '600' },
subtitle: { color: colors.textDim, marginTop: 4 },
label: { color: colors.text, marginTop: 12, marginBottom: 6 },
input: { color: colors.text, borderColor: colors.border, borderWidth: 1, borderRadius: 12, padding: 12, marginBottom: 8 },
btn: { paddingVertical: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: colors.border, marginTop: 16 },
btnText: { color: 'white', fontWeight: '600' },
});//
//  action-plan.tsx
//  
//
//  Created by Carrie Wilson on 8/24/25.
//

