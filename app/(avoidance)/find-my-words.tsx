import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '@/lib/colors';
import { saveDraft } from '@/lib/storage';
import { useRouter } from 'expo-router';


const stems = [
'What I want to say is…',
'I feel __ when __, and I need __.',
'I’m noticing I’ve been avoiding __ because __.',
'A truer sentence is…',
'One thing I’m willing to share is…',
];


export default function FindMyWords() {
const router = useRouter();
const [text, setText] = useState('');


function insertStem(s: string) {
  setText(prev => (prev ? `${prev}\n${s}` : s));
}



async function onSave() {
if (!text.trim()) return;
await saveDraft({ text: text.trim(), createdAt: Date.now() });
setText('');
router.push('/(avoidance)/my-loops-and-notes');
}


return (
<View style={fmw.container}>
<View style={fmw.card}>
<Text style={fmw.title}>Find My Words</Text>
<Text style={fmw.subtitle}>Tap a stem to start, or write your own.</Text>
<View style={fmw.stemsRow}>
{stems.map((s, i) => (
<TouchableOpacity key={i} style={fmw.stem} onPress={() => insertStem(s)}>
<Text style={fmw.stemText}>{s}</Text>
</TouchableOpacity>
))}
</View>
<TextInput value={text} onChangeText={setText} placeholder="Write freely…" placeholderTextColor={colors.textDim} multiline style={fmw.input} />
<TouchableOpacity style={[fmw.btn, fmw.btnPrimary]} onPress={onSave}>
<Text style={fmw.btnText}>Save Draft</Text>
</TouchableOpacity>
</View>
</View>
);
}


const fmw = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
card: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 16 },
title: { color: colors.text, fontSize: 20, fontWeight: '600' },
subtitle: { color: colors.textDim, marginTop: 4 },
stemsRow: { marginTop: 12, gap: 8 },
stem: { backgroundColor: '#1a1f2e', borderRadius: 12, padding: 10, marginBottom: 8, borderWidth: 1, borderColor: colors.border },
stemText: { color: colors.accent },
input: { color: colors.text, minHeight: 140, borderColor: colors.border, borderWidth: 1, borderRadius: 12, padding: 12, textAlignVertical: 'top', marginTop: 10 },
btn: { paddingVertical: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: colors.border, marginTop: 16 },
btnPrimary: { backgroundColor: colors.primary },
btnText: { color: colors.text, fontWeight: '600' },
});//
//  find-my-words.tsx
//  
//
//  Created by Carrie Wilson on 8/24/25.
//

