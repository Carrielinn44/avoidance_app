import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '@/lib/colors';
import { saveReflection } from '@/lib/storage';
import { useRouter } from 'expo-router';


export default function ExploreFeelings() {
const router = useRouter();
const [text, setText] = useState('');


async function onSave() {
if (!text.trim()) return;
await saveReflection({ text: text.trim(), createdAt: Date.now(), tag: 'feelings' });
setText('');
router.push('/(avoidance)/my-loops-and-notes');
}


return (
<View style={ef.container}>
<View style={ef.card}>
<Text style={ef.title}>Explore My Feelings & Needs</Text>
<Text style={ef.subtitle}>What feels hardest about this? What might this be protecting me from? What need is underneath?</Text>
<TextInput value={text} onChangeText={setText} placeholder="Write for 1–3 minutes…" placeholderTextColor={colors.textDim} multiline style={ef.input} />
<TouchableOpacity style={[ef.btn, ef.btnPrimary]} onPress={onSave}>
<Text style={ef.btnText}>Save Reflection</Text>
</TouchableOpacity>
</View>
</View>
);
}


const ef = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
card: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 16 },
title: { color: colors.text, fontSize: 20, fontWeight: '600' },
subtitle: { color: colors.textDim, marginTop: 4 },
input: { color: colors.text, minHeight: 140, borderColor: colors.border, borderWidth: 1, borderRadius: 12, padding: 12, textAlignVertical: 'top', marginTop: 10 },
btn: { paddingVertical: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: colors.border, marginTop: 16 },
btnPrimary: { backgroundColor: colors.primary },
btnText: { color: colors.text, fontWeight: '600' },
});//
//  explore-feelings.tsx
//  
//
//  Created by Carrie Wilson on 8/24/25.
//

