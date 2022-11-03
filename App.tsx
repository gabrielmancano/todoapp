import React from 'react';
import { Text, View } from 'react-native';

import { Home } from './src/screens/Home';

import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts
} from '@expo-google-fonts/inter';

import {
  Anton_400Regular
} from '@expo-google-fonts/anton';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Anton_400Regular
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <Home />
  );
}

