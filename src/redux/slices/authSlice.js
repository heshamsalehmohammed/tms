import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loginAPI, registerAPI} from '../../api/authAPI'; // Import your authentication API functions
import {startLoading, stopLoading} from './utilitiesSlice';
import {handleHttpRequestPromise} from '../../services/HTTPRequestHandler';


export const loginUser = createAsyncThunk(
  'auth/login',
  async (payload, thunkAPI) => {
    return handleHttpRequestPromise(loginAPI(payload), {
      type: 'openPopup',
      payload: {
        type: 'Error',
        title: 'Error login user',
        message:
          'An unexpected error occurred, Cannot login user at thee moment. ',
        buttonLabel: 'OK',
      },
    })
      .then((result) => {
        if (!result.user) {
          return thunkAPI.rejectWithValue(result);
        }

        return thunkAPI.fulfillWithValue(result);
      }).catch((error)=>{
        //return thunkAPI.rejectWithValue({error:error.message});
      })
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
        if (!result.user) {
          return thunkAPI.rejectWithValue(result);
        }

        return thunkAPI.fulfillWithValue(result);
      }).catch((error)=>{
        return thunkAPI.rejectWithValue({error:error.message});
      })
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
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload.error;
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

export const {
  logout,
} = authSlice.actions;



/* export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(loginStart());
    const user = await loginAPI(credentials); // Call your authentication API
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  } finally {
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
  } finally {
    dispatch(stopLoading());
  }
}; */

export default authSlice;
