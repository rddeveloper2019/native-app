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

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const insets = useSafeAreaInsets();

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
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.Black },
          headerTintColor: Colors.White,
          headerTitleStyle: { fontWeight: 'bold' },
          animation: 'slide_from_right',
          gestureEnabled: true,
          contentStyle: {
            backgroundColor: Colors.Black,
            paddingTop: Platform.OS === 'android' ? insets.top : 0,
            paddingBottom: insets.bottom,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Главная',
            headerRight: () => <Button title="Info" onPress={() => {}} />,
          }}
        />
        <Stack.Screen
          name="restore"
          options={{
            title: 'Восстановление',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;
