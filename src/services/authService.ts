import axios from 'axios';
import { FormValues, UserData } from '../types';
import { AUTH_API } from '@env';
export const userLogin = async (data: FormValues): Promise<UserData> => {
  if (!AUTH_API) {
    throw new Error('Missing authentication API endpoint');
  }

  try {
    const response = await axios.post(AUTH_API, data);
    return response.data;
  } catch (err: any) {
    throw new Error(`${err}`);
  }
};
