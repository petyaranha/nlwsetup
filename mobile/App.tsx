//import { StatusBar } from 'expo-status-bar';
import './src/lib/dayjs';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/inter';
//import React from 'react';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
//import { Routes } from './src/screens/routes';
//import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });
  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }
  return (
    <>
      <Routes />
      {/* <Text style={styles.text}>Hello World!</Text> */}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </>
  );
}
