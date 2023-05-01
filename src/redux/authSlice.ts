import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userLogin } from '../services/authService';
import { AuthState, FormValues, UserData } from '../types';

const initialState: AuthState = {
  status: 'unauthenticated',
  isAuthenticated: false,
  authRes: null,
};
export const authenticateUser = createAsyncThunk(
  'auth/authenticateUser',
  async (formData: FormValues) => {
    try {
      const response = await userLogin(formData);
      return response as UserData;
    } catch (err) {
      console.log(err);
    }
    throw new Error('Unable to login with the provided credentials');
  },
);

export const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isAuthenticated = false;
      state.authRes = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(authenticateUser.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      console.log(state, action);
      state.status = 'authenticated';
      state.isAuthenticated = true;
      state.authRes = action.payload;
    });
    builder.addCase(authenticateUser.rejected, state => {
      state.status = 'unauthenticated';
      state.isAuthenticated = false;
      state.authRes = null;
    });
  },
});

export const logout = authSlicer.actions.logout;

export default authSlicer.reducer;
