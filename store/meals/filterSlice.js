import { createSlice } from 'redux-starter-kit';

const initialState = {
  isGlutenFree: false,
  isVegan: false,
  isVegetarian: false,
  isLactoseFree: false
};

const filterSlice = createSlice({
  initialState,
  name: 'filters',
  reducers: {
    setFilter(state, action) {
      const { payload } = action;
      return { ...state, ...payload };
    } 
  } 
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;