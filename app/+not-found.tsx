import { View, Text, Button } from 'react-native';
import { Colors } from '../shared/tokens';
import { router } from 'expo-router';

const NotFoundScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Black,
        padding: 20,
      }}
    >
      <Text
        style={{
          color: Colors.White,
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: 10,
        }}
      >
        Страница не найдена
      </Text>
      <Text
        style={{ color: Colors.Gray, textAlign: 'center', marginBottom: 20 }}
      >
        Запрашиваемая страница не существует.
      </Text>
      <Button
        title="На главную"
        onPress={() => router.back()}
        color={Colors.Primary}
      />
    </View>
  );
};

export default NotFoundScreen;
