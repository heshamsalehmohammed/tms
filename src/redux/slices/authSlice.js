import {createSlice} from '@reduxjs/toolkit';
import {loginAPI, registerAPI} from '../../api/authAPI'; // Import your authentication API functions
import { startLoading, stopLoading } from './utilitiesSlice';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFailure(state, action) {
      state.error = action.payload;
    },
    registerStart(state) {
      state.error = null;
    },
    registerSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    registerFailure(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
} = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(loginStart());
    const user = await loginAPI(credentials); // Call your authentication API
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  } finally{
    dispatch(stopLoading());

  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(registerStart());
    const user = await registerAPI(userData); // Call your registration API
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure(error.message));
  } finally{
    dispatch(stopLoading());

  }
};

export default authSlice;
