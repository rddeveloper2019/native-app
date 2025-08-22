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

export const MyCourses = () => {
  const [{ profile }] = useAtom(profileAtom);

  const login = async () => {
    try {
      const { data } = await axios.post<AuthResponse>(API.login, {
        email: 'fatzey2010@gmail.com',
        password: 'fwJ4994LHyw3tdY',
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <View>
      <AppText>My Courses</AppText>
      <AppText>{profile?.name}</AppText>
      <AppLink href={'/course/typescript'} text="Перейти к курсу" />
      <AppLink href={'/login'} text="Перейти к логину" />
    </View>
  );
};

export default MyCourses;
