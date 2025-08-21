import { Link, router } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppLink } from '../shared/AppLink';
import { SafeAreaView } from 'react-native-safe-area-context';

const Restore = () => {
  return (
    <View>
      <AppLink
        href={'/'}
        text="На главный экран"
        onPress={() => router.back()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    height: '100%',
  },
});

export default Restore;
