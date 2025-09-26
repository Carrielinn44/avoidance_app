// App.js (or your root navigator)

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackNavigator } from '.MainStackNavigator'
//import AvoidanceNavigator from './navigation/AvoidanceNavigator';
import "./global.css"

<style type="text/css">{`
  @font-face {
    font-family: 'MaterialIcons';
    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
  }
`}</style>


function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function RootStack() {
    let MyPathScreen;
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {backgroundColor: 'cyan'},
            }}
         id={ '' }>
            <Stack.Screen
                name="Home" 
                component={HomeScreen}
                options={{title:'Home'}}
            />
            <Stack.Screen name="MyPath" component={MyPathScreen} />
        </Stack.Navigator>    );
}


export default function App() {
  return (
    <NavigationContainer>
        <RootStack />
        <MainStackNavigator />
    </NavigationContainer>
  );
}
//
//  App.js
//        <AvoidanceNavigator />
//
//  Created by Carrie Wilson on 8/24/25.
//

