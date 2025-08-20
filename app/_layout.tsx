import { Slot, Stack, Tabs } from 'expo-router';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Colors } from '../shared/tokens';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.Black },
        headerTintColor: Colors.White,
        headerTitleStyle: { fontWeight: 'bold' },
        animation: 'slide_from_right',
        gestureEnabled: true,
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
      <Stack.Screen />
    </Stack>
  );
};

export default RootLayout;
