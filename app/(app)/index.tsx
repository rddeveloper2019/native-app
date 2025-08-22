import { Text, View } from 'react-native';
import { AppLink } from '../../shared/AppLink';
import { AppText } from '../../shared/AppText';
import { useAtom } from 'jotai';
import { profileAtom } from '../../entities/user/model/user.state';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export const MyCourses = () => {
  const [{ profile }] = useAtom(profileAtom);

  useEffect(() => {
    AsyncStorage.setItem('demo', 'xxxDEMOxxx').then(async () => {
      console.log(await AsyncStorage.getAllKeys());
      console.log(await AsyncStorage.getItem('demo'));
      console.log(await AsyncStorage.removeItem('demo'));
      console.log(await AsyncStorage.getAllKeys());
      console.log(await AsyncStorage.getItem('demo'));
    });
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
