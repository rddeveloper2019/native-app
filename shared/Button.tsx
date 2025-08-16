import {
  Animated,
  Dimensions,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, FontSize, Radius } from "./tokens";

export const Button = ({
  text,
  ...props
}: PressableProps & { text: string }) => {
  const animatedValue = new Animated.Value(0);

  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.Primary, Colors.PrimaryHover],
  });

  const animation = Animated.timing(animatedValue, {
    duration: 3000,
    toValue: 100,
    useNativeDriver: true,
  });

  animation.start();
  return (
    <Pressable {...props}>
      <Animated.View
        style={{
          ...styles.button,
          backgroundColor: color,
        }}
      >
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: Radius._10,
  },
  text: {
    color: Colors.White,
    fontSize: FontSize._18,
  },
});
