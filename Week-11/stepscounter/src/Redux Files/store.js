import { configureStore  } from '@reduxjs/toolkit';
import counterReducer from './reducer';

const store = configureStore({reducer:counterReducer});
export {store};