import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userLogin, userLogout } from '../services/authService';
import { AuthState, FormValues, UserData } from '../types';
import { isAnyOf } from '@reduxjs/toolkit';

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

export const clearUserSession = createAsyncThunk(
  'auth/clearUserSession',
  async () => {
    try {
      await userLogout();
      return initialState;
    } catch (err) {
      console.log(err);
    }
    throw new Error('Unable to logout');
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
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.status = 'authenticated';
      state.isAuthenticated = true;
      state.authRes = action.payload;
    });
    builder.addCase(authenticateUser.rejected, state => {
      state.status = 'unauthenticated';
      state.isAuthenticated = false;
      state.authRes = null;
    });
    builder.addCase(clearUserSession.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    builder.addMatcher(
      isAnyOf(authenticateUser.pending, clearUserSession.pending),
      state => {
        state.status = 'loading';
      },
    );
  },
});

export const logout = authSlicer.actions.logout;

export default authSlicer.reducer;
