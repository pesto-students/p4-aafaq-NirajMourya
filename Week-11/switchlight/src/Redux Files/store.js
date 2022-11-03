import { configureStore  } from '@reduxjs/toolkit';
import roomReducer from './reducer';

const store = configureStore({reducer:roomReducer});
export {store};