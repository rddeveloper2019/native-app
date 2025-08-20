import { Link, LinkProps } from 'expo-router';
import { StyleSheet } from 'react-native';
import { AppText } from './AppText';
import { Colors } from './tokens';

export const AppLink = ({
  text,
  href = '/',
  ...props
}: Partial<LinkProps> & {
  text: string;
}) => {
  return (
    <Link href={href} {...props}>
      <AppText style={styles.link}>{text}</AppText>
    </Link>
  );
};

const styles = StyleSheet.create({ link: { color: Colors.Links } });
