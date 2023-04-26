import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userLogin } from '../services/authService';
import { AuthState, FormValues, UserData } from '../types';

const initialState: AuthState = {
  status: 'unauthorized',
  isAuthenticated: true,
  user: null,
};
export const authenticateUser = createAsyncThunk(
  'auth/authenticateUser',
  async (formData: FormValues) => {
    const response = await userLogin(formData);
    return response as UserData;
  },
);

export const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(authenticateUser.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.status = 'authenticated';
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(authenticateUser.rejected, state => {
      state.status = 'unauthenticated';
      state.isAuthenticated = false;
      state.user = null;
    });
  },
});

export const logout = authSlicer.actions.logout;

export default authSlicer.reducer;
