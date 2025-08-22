import { Redirect, Stack } from 'expo-router';
import { Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '../../shared/tokens';
import { StatusBar } from 'expo-status-bar';
import { useAtomValue, useSetAtom } from 'jotai';
import { authAtom, logoutAtom } from '../../entities/auth/model/auth.model';
import { AppLink } from '../../shared/AppLink';

const AppLayout = () => {
  const { accessToken } = useAtomValue(authAtom);
  const logout = useSetAtom(logoutAtom);

  if (!accessToken) {
    return <Redirect href={'/login'} />;
  }

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
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Главная',
          headerShown: true,
          headerRight: () => <AppLink text="Выйти" onPress={logout} />,
        }}
      />
    </Stack>
  );
};

export default AppLayout;
