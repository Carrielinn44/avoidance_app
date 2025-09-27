import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '@/lib/colors';
import { saveAnchor, getAnchor } from '@/lib/storage';
import { useRouter } from 'expo-router';

export default function AnchorSetup() {
  const router = useRouter();
  const [label, setLabel] = useState('One gentle breath through the nose');
  const [note, setNote] = useState('Hand on heart → inhale softly → “I see you.”');

  useEffect(() => { getAnchor().then(a => { if (a) { setLabel(a.label); setNote(a.note || ''); } }); }, []);

  async function onSave() {
    await saveAnchor({ label, note });
    router.back();
  }

  return (
    <View style={as.container}>
      <View style={as.card}>
        <Text style={as.title}>Create Your Gentle Anchor</Text>
        <Text style={as.subtitle}>Keep it simple, repeatable, and kind.</Text>
        <Text style={as.label}>Name</Text>
        <TextInput value={label} onChangeText={setLabel} style={as.input} placeholder="e.g., One Breath + I see you" placeholderTextColor={colors.textDim} />
        <Text style={as.label}>How you do it (optional)</Text>
        <TextInput value={note} onChangeText={setNote} style={[as.input, { minHeight: 80 }]} multiline placeholder="Describe the anchor in your own words…" placeholderTextColor={colors.textDim} />
        <TouchableOpacity style={[as.btn, as.btnPrimary]} onPress={onSave}>
          <Text style={as.btnText}>Save Anchor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const as = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  card: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 16 },
  title: { color: colors.text, fontSize: 20, fontWeight: '600' },
  subtitle: { color: colors.textDim, marginTop: 4 },
  label: { color: colors.text, marginTop: 12, marginBottom: 6 },
  input: { color: colors.text, borderColor: colors.border, borderWidth: 1, borderRadius: 12, padding: 12 },
  btn: { paddingVertical: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: colors.border, marginTop: 16 },
  btnPrimary: { backgroundColor: colors.primary },
  btnText: { color: colors.text, fontWeight: '600' },
});
//
//  anchor-setup.tsx
//  
//
//  Created by Carrie Wilson on 8/24/25.
//

