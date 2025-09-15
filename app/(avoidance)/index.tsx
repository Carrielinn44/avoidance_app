import React, { useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Audio } from 'expo-av';
import { useRouter } from 'expo-router';
import "../global.css"


import AUDIO_SOURCE from '../../assets/audio/avoidance-intro.wav';

const transcript = [
  "“Welcome. Before we begin, start by taking a slow, easy breath.",
  "There’s nothing you need to change or fix. This is a place to rest, to notice, and to be.",
  "Most of us know the feeling of turning away from something. A conversation we keep postponing. A feeling that is just too heavy to bear. Even the seemingly small, everyday tasks that occupy our thoughts, yet somehow keep slipping through our fingers.",
  "Avoidance isn’t a flaw. It’s an instinctual and effective form of protection.",
  "It’s like walking around a puddle instead of through it. There was a point in your life, when it was the wise and necessary choice. At other times, however, you have felt it standing between you and what you really want or need.",
  "This part of you has been working hard to keep you alive and safe. Now, it's time to start working together.",
  "Here, we don’t push. We don’t demand. We simply notice -- with compassion.",
  "We turn toward these parts of ourselves gently, the way you might sit beside a friend who’s hurting, without needing to fix them.",
  "From here, you get to choose how you’d like to continue.",
  "You can follow a prompted sequence that will guide you step by step along this journey, or you can forge ahead, and explore the practices freely.",
  "There’s no right way. There’s only your way.",
  "And already, just by being here, you’ve taken the first powerful step back into presence.",
  "So, where would you like to begin?”",
];

export default function AvoidanceIntro() {
  const router = useRouter();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => () => { sound?.unloadAsync(); }, [sound]);

  async function toggleAudio() {
    try {
      if (!sound) {
        const { sound: s } = await Audio.Sound.createAsync(AUDIO_SOURCE);
        setSound(s);
        await s.playAsync();
        setIsPlaying(true);
      } else if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    } catch (e) { console.warn('Audio error', e); }
  }

  return (
    <View className="bg-white shadow-md rounded-xl p-6 text-center text-justify-center">
      <View className="flex-auto bg-gray-100 p-2 dark:bg-white/10">
        <Text className='text-accent text-2xl font-semibold mb-2'>Welcome</Text>
        <Text className="text-slate-600 mb-4">Here’s where your next step begins:</Text>
      </View>

      <View className="rounded-xl bg-white p-10 text-sm/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
        <Text className='text-accent text-lg p-5'> Welcome to the gentle return. Choose whichever feels right today</Text>
          <View className='flex flex-col items-center gap-4'>
            <TouchableOpacity onPress={toggleAudio}>
                <Text className='text-cyan-950 text-bold'>{isPlaying ? 'Pause Audio' : 'Play Audio'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowTranscript(!showTranscript)}>
                <Text>{showTranscript ? 'Hide Transcript' : 'Read Instead'}</Text>
            </TouchableOpacity>
          </View>
        {showTranscript && (
          <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight:"100%", paddingBottom: 10 }}>
            <View className='flex-1 items-center gap-4'>
              {transcript.map((p, i) => (
              <Text className='text-gray-900'>• {p}</Text>
            ))}
            </View>
          </ScrollView>
        )}
      </View>

      <View className="grid gap-6 max-w-xl mx-auto">
        <Text className="text-center text-semibold text-lg">Where would you like to begin?</Text>
        <TouchableOpacity onPress={() => router.push('/(avoidance)/gentle-return')}>
          <Text>Start the Sequence</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(avoidance)/support-hub')}>
          <Text>Explore Freely</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

