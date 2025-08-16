import {
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
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
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
