import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import authSlice from './slices/authSlice';
import utilitiesSlice from './slices/utilitiesSlice';

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    utilities: utilitiesSlice.reducer
  },
});
