import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Colors, FontSize, Radius } from "./tokens";

export const Input = (props: TextInputProps) => {
  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor={Colors.Gray}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.VioletDark,
    paddingHorizontal: 26,
    paddingVertical: 20,
    borderRadius: Radius._10,
    fontSize: FontSize._16,
    color: Colors.Gray,
  },
});
