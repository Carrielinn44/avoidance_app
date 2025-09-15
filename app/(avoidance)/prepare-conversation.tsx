import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../lib/colors';
import { saveDraft } from '../../lib/storage';
import { useRouter } from 'expo-router';


export default function PrepareConversation() {
const router = useRouter();
const [text, setText] = useState('');


async function onSave() {
if (!text.trim()) return;
await saveDraft({ text: `Conversation prep: ${text.trim()}`, createdAt: Date.now(), tag: 'conversation' });
setText('');
router.push('/(avoidance)/my-loops-and-notes');
}


return (
<View style={pc.container}>
<View style={pc.card}>
<Text style={pc.title}>Prepare for a Conversation</Text>
<Text style={pc.subtitle}>Try: “I feel __ when __, and I need __.” Add a grounding plan you’ll use before and after.</Text>
<TextInput value={text} onChangeText={setText} placeholder="Draft what you want to say…" placeholderTextColor={colors.textDim} multiline style={pc.input} />
<TouchableOpacity style={[pc.btn, pc.btnPrimary]} onPress={onSave}>
<Text style={pc.btnText}>Save Prep</Text>
</TouchableOpacity>
</View>
</View>
);
}


const pc = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
card: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 16 },
title: { color: colors.text, fontSize: 20, fontWeight: '600' },
subtitle: { color: colors.textDim, marginTop: 4 },
input: { color: colors.text, minHeight: 120, borderColor: colors.border, borderWidth: 1, borderRadius: 12, padding: 12, textAlignVertical: 'top', marginTop: 10 },
btn: { paddingVertical: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: colors.border, marginTop: 16 },
btnPrimary: { backgroundColor: '#0b3b2e' },
btnText: { color: colors.text, fontWeight: '600' },
});//
//  prepare-conversation.tsx
//  
//
//  Created by Carrie Wilson on 8/24/25.
//

