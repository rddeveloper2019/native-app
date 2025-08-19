import { Slot } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const RootLayout = () => {
  return (
    <>
      <View>
        <Text>Header</Text>
      </View>
      <Slot />
      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
};

export default RootLayout;
