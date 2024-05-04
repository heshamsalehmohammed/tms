import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import utilitiesSlice from './slices/utilitiesSlice';

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    utilities: utilitiesSlice.reducer
  },
});
