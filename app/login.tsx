import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Input } from '../shared/Input';
import { Colors, FontSize, Gaps } from '../shared/tokens';
import { Button } from '../shared/Button';
import { ErrorNotification } from '../shared/ErrorNotification';
import { useState } from 'react';
import { AppLink } from '../shared/AppLink';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.model';
import { router } from 'expo-router';

const Login = () => {
  const [localError, setLocalError] = useState<string | undefined>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [{ accessToken, error, isLoading }, login] = useAtom(loginAtom);

  useEffect(() => {
    if (error) {
      setLocalError(error);
    }
  }, [error]);

  useEffect(() => {
    if (accessToken) {
      router.replace('/');
    }
  }, [accessToken]);

  const submit = () => {
    if (!email) {
      setLocalError('Введите email!');
      return;
    }
    if (!password) {
      setLocalError('Введите пароль!');
      return;
    }

    login({ email, password });
  };

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <ErrorNotification
          error={localError}
          onHide={() => setLocalError('')}
        />
        <View style={styles.content}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.form}>
            <Input placeholder="Email" onChangeText={setEmail} />
            <Input isPassword placeholder="Пароль" onChangeText={setPassword} />
            <Button text="Войти" onPress={submit} />
          </View>
          <AppLink href={'/restore'} text="Восстановить пароль" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 35,
    flex: 1,
    backgroundColor: Colors.Black,
  },
  content: { justifyContent: 'center', alignItems: 'center', gap: Gaps._50 },
  form: { alignSelf: 'stretch', gap: Gaps._16 },
  logo: {
    width: 200,
  },
});

export default Login;
