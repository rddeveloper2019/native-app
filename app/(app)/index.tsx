import { View } from 'react-native';
import { AppLink } from '../../shared/AppLink';
import { AppText } from '../../shared/AppText';
import { useAtom, useSetAtom } from 'jotai';
import { profileAtom } from '../../entities/user/model/user.state';
import { useEffect } from 'react';
import { loginAtom, logoutAtom } from '../../entities/auth/model/auth.model';

export const MyCourses = () => {
  const [{ profile }] = useAtom(profileAtom);

  const [{ accessToken, isLoading, error }, login] = useAtom(loginAtom);
  const logout = useSetAtom(logoutAtom);

  useEffect(() => {
    login({
      email: 'vasia@pupkin.ru',
      password: '12345678',
    });

    setTimeout(() => {
      logout();
    }, 6000);
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
