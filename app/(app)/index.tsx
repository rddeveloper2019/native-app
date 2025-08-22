import { Text, View } from 'react-native';
import { AppLink } from '../../shared/AppLink';
import { AppText } from '../../shared/AppText';
import { useAtom } from 'jotai';
import { profileAtom } from '../../entities/user/model/user.state';

export const MyCourses = () => {
  const [{ profile }] = useAtom(profileAtom);
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
