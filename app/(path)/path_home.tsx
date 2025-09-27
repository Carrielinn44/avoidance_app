import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const path_home = () => {
    
    return (
        <View>
            <Text>Path Home</Text>
        <TouchableOpacity className="rounded-xl bg-cyan-700 active:bg-cyan-800 px-5 py-3" onPress={() => router.push('/(routes)/defaults')}>
            <Text className="text-white text-base font-semibold">Defaults</Text>
        </TouchableOpacity>
        </View>
    )
}

export default path_home