import { Text, View } from 'react-native';
import { AppLink } from '../../shared/AppLink';
import { AppText } from '../../shared/AppText';
import { useAtom } from 'jotai';
import { profileAtom } from '../../entities/user/model/user.state';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { API } from '../../entities/auth/api';
import axios from 'axios';
import { AuthResponse } from '../../entities/auth/model/auth.interfaces';
import { loginAtom } from '../../entities/auth/model/auth.model';

export const MyCourses = () => {
  const [{ profile }] = useAtom(profileAtom);

  const [{ accessToken, isLoading, error }, login] = useAtom(loginAtom);

  useEffect(() => {
    login({
      email: 'vasia@pupkin.ru',
      password: '12345678',
    });
  }, []);

  return (
    <View>
      <AppText>My Courses</AppText>
      <AppText>{profile?.name}</AppText>
      <AppText>{accessToken}</AppText>
      <AppText>{error}</AppText>
      <AppLink href={'/course/typescript'} text="Перейти к курсу" />
      <AppLink href={'/login'} text="Перейти к логину" />
    </View>
  );
};

export default MyCourses;
