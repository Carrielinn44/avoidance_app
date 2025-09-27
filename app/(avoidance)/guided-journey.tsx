import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '@/lib/colors';
import { useRouter } from 'expo-router';


export default function GuidedJourney() {
const router = useRouter();
const [t1, setT1] = useState<string | null>(null); // task | conversation | feeling | body
const [t2, setT2] = useState<string | null>(null); // fear | confusion | words | overwhelm


function route() {
if (t1 === 'conversation' || t2 === 'words') return router.push('/(avoidance)/find-my-words');
if (t2 === 'overwhelm' || t1 === 'task') return router.push('/(avoidance)/action-plan');
if (t1 === 'feeling' || t2 === 'fear') return router.push('/(avoidance)/explore-feelings');
return router.push('/(avoidance)/support-hub');
}


return (
<View style={gj.container}>
<View style={gj.card}>
<Text style={gj.title}>Help Me Find What I Need</Text>
<Text style={gj.subtitle}>Two tiny steps, then I’ll point you to a good place to start.</Text>


<Text style={gj.label}>What are you avoiding?</Text>
<View style={gj.row}>
{['task', 'conversation', 'feeling', 'body'].map(opt => (
<TouchableOpacity key={opt} style={[gj.pill, t1 === opt && gj.pillActive]} onPress={() => setT1(opt)}>
<Text style={gj.pillText}>{opt}</Text>
</TouchableOpacity>
))}
</View>


<Text style={gj.label}>What feels hardest right now?</Text>
<View style={gj.row}>
{['fear', 'confusion', 'words', 'overwhelm'].map(opt => (
<TouchableOpacity key={opt} style={[gj.pill, t2 === opt && gj.pillActive]} onPress={() => setT2(opt)}>
<Text style={gj.pillText}>{opt}</Text>
</TouchableOpacity>
))}
</View>


<TouchableOpacity style={[gj.btn, gj.btnPrimary]} onPress={route}>
<Text style={gj.btnText}>Take Me There</Text>
</TouchableOpacity>
</View>
</View>
);
}


const gj = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
card: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 16 },
title: { color: colors.text, fontSize: 20, fontWeight: '600' },
subtitle: { color: colors.textDim, marginTop: 4 },
label: { color: colors.text, marginTop: 12, marginBottom: 6 },
row: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
pill: { borderWidth: 1, borderColor: colors.border, borderRadius: 24, paddingHorizontal: 12, paddingVertical: 6, marginBottom: 8 },
pillActive: { backgroundColor: colors.accent },
pillText: { color: colors.text },
btn: { paddingVertical: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: colors.border, marginTop: 16 },
btnPrimary: { backgroundColor: colors.primary },
btnText: { color: colors.text, fontWeight: '600' },
});//
//  guided-journey.tsx
//  
//
//  Created by Carrie Wilson on 8/24/25.
//

