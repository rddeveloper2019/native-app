import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Restore = () => {
  return (
    <View>
      <Link href={'/'}>
        <Text>Restore</Text>
      </Link>
    </View>
  );
};

export default Restore;
