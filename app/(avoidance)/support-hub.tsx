// app/(avoidance)/support-hub.tsx
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { colors } from "@/lib/colors";
import React from "react";

export default function SupportHub() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.h}>
        Welcome back. You’ve already taken a brave step. What might support you today?
      </Text>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/(avoidance)/explore-feelings")}>
        <Text style={styles.title}>🌱 Explore My Feelings & Needs</Text>
        <Text style={styles.subtitle}>Gently uncover what’s underneath.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/(avoidance)/find-my-words")}>
        <Text style={styles.title}>🗣️ Find My Words</Text>
        <Text style={styles.subtitle}>Give shape to what you want to say.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/(avoidance)/action-plan")}>
        <Text style={styles.title}>🪜 Create My Action Plan</Text>
        <Text style={styles.subtitle}>Break it into small, doable steps.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/(avoidance)/prepare-conversation")}>
        <Text style={styles.title}>🤝 Prepare for a Conversation</Text>
        <Text style={styles.subtitle}>Practice + ground before you connect.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/(avoidance)/guided-journey")}>
        <Text style={styles.title}>🌀 Help Me Find What I Need</Text>
        <Text style={styles.subtitle}>Not sure where to start? We’ll walk together.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/(avoidance)/gentle-return")}>
        <Text style={styles.title}>🌿 Not Ready Yet</Text>
        <Text style={styles.subtitle}>Return to The Gentle Return.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card, { borderStyle: "dashed" }]} onPress={() => router.push("/(avoidance)/my-loops-and-notes")}>
        <Text style={styles.title}>💫 My Saved Loops & Notes</Text>
        <Text style={styles.subtitle}>See your anchors, loops, drafts, reflections.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  h: { color: colors.text, fontSize: 18, marginBottom: 12 },
  card: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 16, marginBottom: 10 },
  title: { color: colors.text, fontSize: 16, fontWeight: "600" },
  subtitle: { color: colors.textDim, marginTop: 4 },
});