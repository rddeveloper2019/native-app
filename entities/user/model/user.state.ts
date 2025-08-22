import { atom } from 'jotai';
import { User } from './user.model';

export const profileAtom = atom<UserState>({
  profile: { id: 1, name: 'Alex', surname: '', photo: '' },
  isLoading: false,
  error: null,
});

interface UserState {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
}
