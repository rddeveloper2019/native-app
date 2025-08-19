import React from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { Colors, FontSize, Radius } from './tokens';
import EyeClosedIcon from '../assets/icons/eye-closed';
import EyeOpenIcon from '../assets/icons/eye-open';
import { useState } from 'react';

export const Input = (props: TextInputProps & { isPassword?: boolean }) => {
  const [isPassVisible, setIsPassVisible] = useState(true);

  return (
    <View>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={Colors.Gray}
        secureTextEntry={props.isPassword && !isPassVisible}
      />

      {props.isPassword && (
        <Pressable
          onPress={() => setIsPassVisible(!isPassVisible)}
          style={styles.eyeIcons}
        >
          <View style={styles.eyeIcon}>
            {isPassVisible && <EyeOpenIcon />}
            {!isPassVisible && <EyeClosedIcon />}
          </View>
        </Pressable>
      )}
    </View>
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
  eyeIcons: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  eyeIcon: {
    height: 58,
    marginRight: 24,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
