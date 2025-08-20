import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { AppLink } from '../shared/AppLink';
import { AppText } from '../shared/AppText';
import { router } from 'expo-router';
import { Colors, Gaps } from '../shared/tokens';

const NotFoundScreen = () => {
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require('../assets/images/not-found.png')}
            style={styles.image}
          />
          <AppText style={styles.text}>
            Ооо... что-то пошло не так. Попробуйте вернуться на главный экран
            приложения
          </AppText>
          <AppLink text="На главный экран" onPress={() => router.back()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    height: '100%',
  },
  image: {
    width: 204,
    height: 283,
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 35,
    flex: 1,
    backgroundColor: Colors.Black,
  },
  content: { justifyContent: 'center', alignItems: 'center', gap: Gaps._50 },
  text: {
    textAlign: 'center',
  },
});

export default NotFoundScreen;
