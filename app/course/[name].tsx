import { SafeAreaView, View, StyleSheet } from 'react-native';
import { AppText } from '../../shared/AppText';
import { Stack, useLocalSearchParams } from 'expo-router';

const CoursePage = () => {
  const { name } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerTitle: name.toString().toUpperCase() }} />
      <SafeAreaView style={styles.area}>
        <View>
          <AppText>Название курса: {name}</AppText>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  area: {
    height: '100%',
  },
});

export default CoursePage;
