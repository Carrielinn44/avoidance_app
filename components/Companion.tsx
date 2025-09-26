// =============================================================
// components/Companion.tsx (Mascot Ally + Tone Map)
// =============================================================
import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../lib/colors';

type Ctx = 'missed' | 'skipped' | 'mood' | 'celebrate';

const phrases: Record<Ctx, string[]> = {
  missed: [
    "Hey, it’s been a little while. Want to dip a toe back in with me?",
    "Welcome back. Want to sit with me for a breath?",
    "Every return counts. Shall we start now?",
  ],
  skipped: [
    "Not now is okay. We can pause together whenever you like.",
    "No pressure. We could sit quietly for a moment instead.",
    "I’ll be here, steady, until you’re ready.",
  ],
  mood: [
    "I can sense today feels heavy. Let’s take one slow breath together.",
    "You’re not alone. I’ll sit right here with you.",
    "One small step is enough. Want to try it with me?",
  ],
  celebrate: [
    "You came back — I’m glad you’re here.",
    "Every return matters. This one too.",
    "Look at you, showing up again. That’s worth honoring.",
  ],
};

export function Companion({ context = 'missed', onYes, onNo }: { context?: Ctx; onYes: () => void; onNo: () => void }) {
  const copy = useMemo(() => {
    const list = phrases[context] || phrases.missed;
    return list[Math.floor(Math.random() * list.length)];
  }, [context]);

  return (
    <View style={s.wrapper}>
      <View style={s.card}>
        <Text style={s.mascot}>🐾</Text>
        <Text style={s.text}>{copy}</Text>
        <View style={s.row}>
          <TouchableOpacity style={[s.btn, s.btnYes]} onPress={onYes}>
            <Text style={s.btnText}>Yes, guide me back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[s.btn, s.btnNo]} onPress={onNo}>
            <Text style={s.btnText}>Not now, thanks</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  wrapper: { position: 'absolute', left: 0, right: 0, bottom: 0, padding: 16 },
  card: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 16 },
  mascot: { fontSize: 22, marginBottom: 6 },
  text: { color: colors.text, fontSize: 16, lineHeight: 22, marginBottom: 12 },
  row: { flexDirection: 'row', gap: 8 },
  btn: { flex: 1, paddingVertical: 10, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: colors.border },
  btnYes: { backgroundColor: '#0b3b2e' },
  btnNo: { backgroundColor: '#2a2a2a' },
  btnText: { color: colors.text },
});

//  Companion.tsx
//  
//
//  Created by Carrie Wilson on 8/24/25.
//

