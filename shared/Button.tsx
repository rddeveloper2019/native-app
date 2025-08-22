import React from 'react';
import {
  ActivityIndicator,
  Animated,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from 'react-native';
import { Colors, FontFamily, FontSize, Radius } from './tokens';
import { AppText } from './AppText';

export const Button = ({
  text,
  isLoading = false,
  ...props
}: PressableProps & { text: string; isLoading?: boolean }) => {
  const animatedValue = new Animated.Value(0);

  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.Primary, Colors.PrimaryHover],
  });

  const handlePressIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      duration: 100,
      toValue: 100,
      useNativeDriver: true,
    }).start();

    props.onPressIn?.(e);
  };

  const handlePressOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      duration: 100,
      toValue: 0,
      useNativeDriver: true,
    }).start();

    props.onPressOut?.(e);
  };

  return (
    <Pressable {...props} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View
        style={{
          ...styles.button,
          backgroundColor: color,
        }}
      >
        {!isLoading && <AppText style={styles.text}>{text}</AppText>}
        {isLoading && <ActivityIndicator size={'small'} color={Colors.White} />}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: Radius._10,
  },
  text: {
    fontFamily: FontFamily.Semibold,
  },
});
