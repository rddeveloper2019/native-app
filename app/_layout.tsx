import { Slot, Stack, Tabs } from 'expo-router';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View, Text, Button, Platform, Image } from 'react-native';
import { Colors } from '../shared/tokens';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // const insets = useSafeAreaInsets();

  const [loaded, error] = useFonts({
    'FiraSans-Regular': require('../assets/fonts/FiraSans-Regular.ttf'),
    'FiraSans-SemiBold': require('../assets/fonts/FiraSans-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      {/* <StatusBar style="light" /> */}
      <Stack
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: Colors.Black },
          headerTintColor: Colors.White,
          headerTitleStyle: { fontWeight: 'bold' },
          animation: 'slide_from_right',
          gestureEnabled: true,
          contentStyle: {
            backgroundColor: Colors.Black,
            // paddingTop: Platform.OS === 'android' ? insets.top : 0,
            // paddingBottom: insets.bottom,
          },
        }}
      >
        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            title: 'Логин',
            headerBackTitle: 'Главная',
          }}
        />
        <Stack.Screen
          name="restore"
          options={{
            headerShown: true,
            title: 'Восстановление',
            headerBackTitle: '',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;
