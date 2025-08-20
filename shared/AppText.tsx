import { PropsWithChildren } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextProps } from 'react-native-svg';
import { Colors, FontFamily, FontSize } from './tokens';

export const AppText = ({
  children,
  style,
  ...props
}: PropsWithChildren<TextProps> & { style?: any }) => {
  return (
    <Text {...props} style={{ ...styles.text, ...style }}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize._18,
    fontFamily: FontFamily.Regular,
    color: Colors.White,
  },
});
