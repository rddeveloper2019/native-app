import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { atom } from 'jotai';
import { AuthPayload, AuthResponse } from './auth.interfaces';
import axios, { AxiosError } from 'axios';
import { API } from '../api';

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

const INITIAL_STATE = {
  accessToken: null,
  isLoading: false,
  error: null,
};

export const authAtom = atomWithStorage<AuthState>(
  'auth',
  INITIAL_STATE,
  storage,
);

export const loginAtom = atom(
  (_get) => _get(authAtom),
  async (_get, _set, { email, password }: AuthPayload) => {
    _set(authAtom, { accessToken: null, isLoading: true, error: null });

    try {
      const {
        data: { accessToken },
      } = await axios.post<AuthResponse>(API.login, {
        email,
        password,
      });
      _set(authAtom, { accessToken, isLoading: false, error: null });
    } catch (error) {
      if (error instanceof AxiosError) {
        _set(authAtom, {
          accessToken: null,
          isLoading: false,
          error: error.response?.data.message,
        });
      }
    }
  },
);

export const logoutAtom = atom(null, (_, set) => {
  set(authAtom, INITIAL_STATE);
});

export interface AuthState {
  accessToken: string | null;
  isLoading: boolean;
  error: string | null;
}
