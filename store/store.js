import { configureStore } from 'redux-starter-kit';
import { combineReducers } from 'redux';

import mealsSlice from './meals/mealsSlice';
import filterSlice from './meals/filterSlice';

const reducer = combineReducers({
  meals: mealsSlice,
  filters: filterSlice
});

export default configureStore({
  reducer
});