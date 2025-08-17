import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";
import { Colors, FontSize } from "./tokens";

export const ErrorNotification = ({ error }: { error?: string }) => {
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
      return;
    }

    setShown(true);

    let timeout = setTimeout(() => {
      setShown(false);
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
      <Text style={styles.error}>{error}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  errorBox: {
    position: "absolute",
    top: 50,
    width: Dimensions.get("screen").width,
    backgroundColor: Colors.Red,

    padding: 16,
  },
  error: {
    fontSize: FontSize._16,
    color: Colors.White,
    textAlign: "center",
  },
});
