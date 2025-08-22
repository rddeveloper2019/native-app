import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, Animated } from 'react-native';
import { Colors, FontSize } from './tokens';
import { AppText } from './AppText';

export const ErrorNotification = ({
  error,
  onHide,
}: {
  error?: string;
  onHide?: () => void;
}) => {
  const [shown, setShown] = useState(false);
  const animatedValue = new Animated.Value(-100);

  const handleLayout = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (!error) {
      setShown(false);
      onHide?.();
      return;
    }

    setShown(true);

    const timeout = setTimeout(() => {
      setShown(false);
      onHide?.();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  if (!shown) {
    return null;
  }

  return (
    <Animated.View
      style={{ ...styles.errorBox, transform: [{ translateY: animatedValue }] }}
      onLayout={handleLayout}
    >
      <AppText style={styles.error}>{error}</AppText>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  errorBox: {
    position: 'absolute',
    top: 0,
    width: Dimensions.get('screen').width,
    backgroundColor: Colors.Red,
    padding: 16,
  },
  error: {
    fontSize: FontSize._16,
    textAlign: 'center',
  },
});
