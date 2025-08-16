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
  const animatedValue = new Animated.ValueXY({ x: 0, y: 0 });
  const animation = Animated.timing(animatedValue, {
    duration: 2000,
    toValue: {
      x: 100,
      y: 100,
    },
    useNativeDriver: true,
  });

  animation.start();
  return (
    <Pressable {...props}>
      <Animated.View
        style={{
          ...styles.button,
          transform: [
            { translateX: animatedValue.x },
            { translateY: animatedValue.y },
          ],
        }}
      >
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Primary,
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
