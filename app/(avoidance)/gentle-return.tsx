import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../lib/colors';
import { Audio } from 'expo-av';
import { saveReflection, getAnchor } from '../../lib/storage';
import { useRouter } from 'expo-router';

import PRACTICE_AUDIO from '../../assets/audio/turn-toward.mp3';

const steps = [
  { key: 'reflect', title: 'Gentle Reflection', subtitle: 'What are you circling around?', cta: 'Save Reflection' },
  { key: 'somatic', title: 'The Turn Toward', subtitle: 'A short embodied practice', cta: 'Finish Practice' },
  { key: 'anchor', title: 'Your Anchor', subtitle: 'Recall your personal gentle return anchor', cta: 'I used my anchor' },
  { key: 'done', title: 'Return Complete', subtitle: 'Would you like support to face what you’ve been avoiding?', cta: 'Go to Support Hub' },
];

export default function GentleReturn() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [note, setNote] = useState('');
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [anchor, setAnchor] = useState<{ label: string } | null>(null);

  useEffect(() => { getAnchor().then(setAnchor); return () => { sound?.unloadAsync(); }; }, []);

  async function playPractice() {
    try {
      if (!sound) {
        const { sound: s } = await Audio.Sound.createAsync(PRACTICE_AUDIO);
        setSound(s);
        await s.playAsync();
      } else {
        await sound.replayAsync();
      }
    } catch (e) { console.warn('practice audio', e); }
  }

  async function next() {
    const step = steps[index];
    if (step.key === 'reflect' && note.trim()) {
      await saveReflection({ text: note.trim(), createdAt: Date.now() });
    }
    if (index < steps.length - 1) setIndex(index + 1);
  }

  const step = steps[index];

  return (
    <View style={gr.container}>
      <View style={gr.card}>
        <Text style={gr.title}>{step.title}</Text>
        <Text style={gr.subtitle}>{step.subtitle}</Text>

        {step.key === 'reflect' && (
          <View style={{ marginTop: 12 }}>
            <Text style={gr.label}>“What am I circling around?”</Text>
            <TextInput value={note} onChangeText={setNote} placeholder="Write one or two lines…" placeholderTextColor={colors.textDim} multiline style={gr.input} />
          </View>
        )}

        {step.key === 'somatic' && (
          <View style={{ marginTop: 12 }}>
            <Text style={gr.body}>Hand on heart or belly. Whisper: “I see you.” Take one easy breath. Optional micro-movement.</Text>
            <TouchableOpacity style={[gr.btn, gr.btnPrimary]} onPress={playPractice}>
              <Text style={gr.btnText}>Play Practice</Text>
            </TouchableOpacity>
          </View>
        )}

        {step.key === 'anchor' && (
          <View style={{ marginTop: 12 }}>
            {anchor ? (
              <Text style={gr.body}>Your anchor: <Text style={{ color: colors.accent }}>{anchor.label}</Text></Text>
            ) : (
              <Text style={gr.body}>No anchor yet. You can create one in Anchor Setup.</Text>
            )}
            <TouchableOpacity style={[gr.btn, gr.btnSecondary, { marginTop: 10 }]} onPress={() => router.push('/(avoidance)/anchor-setup')}>
              <Text style={gr.btnText}>Edit / Create Anchor</Text>
            </TouchableOpacity>
          </View>
        )}

        {step.key === 'done' && (
          <View style={{ marginTop: 12 }}>
            <TouchableOpacity style={[gr.btn, gr.btnPrimary]} onPress={() => router.push('/(avoidance)/support-hub')}>
              <Text style={gr.btnText}>Go to Support Hub</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[gr.btn, gr.btnSecondary, { marginTop: 8 }]} onPress={() => router.replace('/(avoidance)')}>
              <Text style={gr.btnText}>Or return to Intro</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {step.key !== 'done' && (
        <TouchableOpacity style={[gr.btn, gr.nextBtn]} onPress={next}>
          <Text style={gr.btnText}>{step.cta}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const gr = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  card: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 16 },
  title: { color: colors.text, fontSize: 20, fontWeight: '600' },
  subtitle: { color: colors.textDim, marginTop: 4 },
  label: { color: colors.text, marginTop: 8, marginBottom: 6 },
  input: { color: colors.text, minHeight: 100, borderColor: colors.border, borderWidth: 1, borderRadius: 12, padding: 12, textAlignVertical: 'top' },
  body: { color: colors.text, lineHeight: 22 },
  btn: { paddingVertical: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: colors.border },
  btnPrimary: { backgroundColor: '#346055ff', marginTop: 12 },
  btnSecondary: { backgroundColor: '#747474ff' },
  btnText: { color: colors.text, fontWeight: '600' },
  nextBtn: { backgroundColor: '#538074ff', marginTop: 16 },
});
//
//  gentle-return.tsx
//  
//
//  Created by Carrie Wilson on 8/24/25.
//

