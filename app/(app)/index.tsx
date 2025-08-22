import { View } from 'react-native';
import { AppLink } from '../../shared/AppLink';
import { AppText } from '../../shared/AppText';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { profileAtom } from '../../entities/user/model/user.state';
import { useEffect } from 'react';
import {
  authAtom,
  loginAtom,
  logoutAtom,
} from '../../entities/auth/model/auth.model';
import { router, useRootNavigationState } from 'expo-router';

export const MyCourses = () => {
  // const [{ profile }] = useAtom(profileAtom);

  // const [{ accessToken, isLoading, error }, login] = useAtom(loginAtom);
  // const logout = useSetAtom(logoutAtom);
  const state = useRootNavigationState();

  const { accessToken } = useAtomValue(authAtom);

  useEffect(() => {
    if (!accessToken && state.key) {
      router.replace('login');
    }
  }, [accessToken, state]);

  return (
    <View>
      <AppText>My Courses</AppText>

      <AppLink href={'/course/typescript'} text="Перейти к курсу" />
      <AppLink href={'/login'} text="Перейти к логину" />
    </View>
  );
};

export default MyCourses;
