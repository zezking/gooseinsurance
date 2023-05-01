import axios from 'axios';
import { FormValues, UserData } from '../types';
import { AUTH_API } from '@env';
import { persistor } from '../redux/store';
export const userLogin = async (data: FormValues): Promise<UserData> => {
  if (!AUTH_API) {
    throw new Error('Missing authentication API endpoint');
  }

  try {
    const response = await axios.post(AUTH_API, data);
    return response.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const userLogout = async (): Promise<void> => {
  try {
    await persistor.purge();
    console.log(persistor.getState());
  } catch (err: any) {
    const state = persistor.getState();
    throw new Error(err);
  }
};
