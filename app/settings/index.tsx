import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const settings = () => {
  useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <Text>Settings</Text>
      <Text>Light Mode/Dark Mode</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      

    </View>
  )
}

export default settings

function setIsEnabled(arg0: (previousState: any) => boolean) {
  throw new Error('Function not implemented.');
}
