import { Stack } from 'expo-router';
import { Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '../../shared/tokens';
import { StatusBar } from 'expo-status-bar';

const AppLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: Colors.Black },
        headerTintColor: Colors.White,
        headerTitleStyle: { fontWeight: 'bold' },
        animation: 'slide_from_right',
        gestureEnabled: true,
        contentStyle: {
          backgroundColor: Colors.Black,
          // paddingTop: Platform.OS === 'android' ? insets.top : 0,
          // paddingBottom: insets.bottom,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Главная',
          headerShown: true,
          headerRight: () => (
            <Button title="?" onPress={() => {}} color={Colors.Primary} />
          ),
        }}
      />
    </Stack>
  );
};

export default AppLayout;
