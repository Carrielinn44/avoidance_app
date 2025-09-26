import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MicroPathButton } from '@/components/MicroPathButton'
import { Card } from '@/components/ui/Card'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

  const hour = new Date().getHours();
  const timeOfDay =
  hour < 12 ? "Good morning" :
  hour < 18 ? "Good afternoon" :
  "Good evening";

const Home= () => {
  return (
    <SafeAreaView>
      <View className='flex-1 p-5 align-center justify-evenly'>
        <Card>
          <Text className='font-bold font-sans text-xl m-10 text-center'>{timeOfDay}, Welcome Home</Text>
        </Card>
        <Card>
            <MicroPathButton />
            <TouchableOpacity className="rounded-xl bg-cyan-700 active:bg-cyan-800 px-5 py-3" onPress={() => router.push('/(path)/path_home')}>
                <Text className="text-white text-base font-semibold">PATH Home</Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-xl bg-cyan-700 active:bg-cyan-800 px-5 py-3" onPress={() => router.push('/(avoidance)')}>
                <Text className="text-white text-base font-semibold">Genly Return from Avoidance</Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-xl bg-cyan-700 active:bg-cyan-800 px-5 py-3" onPress={() => router.push('/settings')}>
                <Text className="text-white text-base font-semibold">Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-xl bg-cyan-700 active:bg-cyan-800 px-5 py-3" onPress={() => router.push('/today')}>
                <Text className="text-white text-base font-semibold">Today</Text>
            </TouchableOpacity>
        </Card>
      </View>
    </SafeAreaView>
  )
}

export default Home