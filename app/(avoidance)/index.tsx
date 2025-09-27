import React, { useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { Audio } from 'expo-av';
import { useRouter } from 'expo-router';
import "../global.css"
import AUDIO_SOURCE from '../../assets/audio/avoidance-intro.wav';
import {Button, ButtonProps} from "@/components/ui/Button";
import { MicroPathButton } from '@/components/MicroPathButton';

const transcript = [
  "Welcome. Before we begin, start by taking a slow, easy breath.",
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
    <View className="flex-1 items-center justify-center">
      <ScrollView className='flex-1'>
        <View className="flex-1">
            <Text className='text-gray-700 text-2xl text-center font-semibold p-1 m-10'>Welcome to the Gentle Return</Text>
            <Text className='text-gray-900 text-lg text-center mb-2'>A space to turn toward what you’ve been avoiding</Text>
          <View className="flex-1 bg-gray-100 grid shadow-md rounded-xl p-6 gap-1 m-6">
            <Text className='text-center text-gray-900 text-semibold text-lg'>Introduction</Text>
          <View className='flex-row gap-4 p-5 justify-center'>
            <Button className='default' onPress={toggleAudio}>
              <Text className='text-white text-bold'>{isPlaying ? 'Pause' : 'Listen'}</Text>
            </Button>
            <Button onPress={() => setShowTranscript(!showTranscript)}>
              <Text className='text-white text-bold'>{showTranscript ? 'Hide Transcript' : 'Read'}</Text>
            </Button>
          </View>
          <View className='flex-1 bg-gray-100 p-3 m-3'>
                        {showTranscript && (
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight:"50%", padding:50, flexGrow:1 }}>
              <View className='flex-1'>
                  {transcript.map((p) => (
                    <Text className='text-gray-900 text-base'>    {p}</Text>
                  ))}
              </View>
            </ScrollView>
                  )}     
          </View>
            </View>
            <View className="flex-2 bg-gray-100 grid shadow-md rounded-xl p-6 gap-3 m-6">
              <Text className="text-center text-gray-900 text-semibold text-lg">Where would you like to begin?</Text>
              <TouchableOpacity className="rounded-xl bg-cyan-700 active:bg-cyan-800 hover:bg-cyan-900 px-5 py-3" onPress={() => router.push('/(avoidance)/gentle-return')}>
                <Text className="text-white text-base font-semibold">Start the Sequence</Text>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-xl bg-cyan-700 active:bg-cyan-800 px-5 py-3" onPress={() => router.push('/(avoidance)/support-hub')}>
                <Text className="text-white text-base font-semibold">Explore Freely</Text>
              </TouchableOpacity>
              <MicroPathButton />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

