import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loginAPI, registerAPI} from '../../api/authAPI'; // Import your authentication API functions
import {startLoading, stopLoading} from './utilitiesSlice';
import {handleHttpRequestPromise} from '../../services/HTTPRequestHandler';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (payload, thunkAPI) => {
    thunkAPI.dispatch(clearAuthError());
    return handleHttpRequestPromise(loginAPI(payload), {
      type: 'openPopup',
      showForStatuses: '500,404,501',
      payload: {
        type: 'Error',
        title: 'Error login user',
        message:
          'An unexpected error occurred, Cannot login user at thee moment. ',
        buttonLabel: 'OK',
      },
    })
      .then((result) => {
        return thunkAPI.fulfillWithValue(result.data);
      })
      .catch((error) => {
        if ([400, 401].includes(error.response.status))
          return thunkAPI.rejectWithValue({
            error: 'Invalid username or password',
          });
        return thunkAPI.abort();
      });
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    return handleHttpRequestPromise(registerAPI(userData), {
      type: 'openPopup',
      payload: {
        type: 'Error',
        title: 'Error registering user',
        message:
          'An unexpected error occurred, Cannot register user at the moment. ',
        buttonLabel: 'OK',
      },
    })
      .then((result) => {
        return thunkAPI.fulfillWithValue(result);
      })
      .catch((error) => {
        return thunkAPI.rejectWithValue({error: error.message});
      });
  }
);

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError(state) {
      state.error = null;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload.Data.Token);
        state.user = action.payload.Data.User;
      })
      .addCase(loginUser.rejected, (state, action) => {
        if (action?.payload?.error) {
          state.error = action.payload.error;
        }
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export const {logout, clearAuthError} = authSlice.actions;

export default authSlice;
