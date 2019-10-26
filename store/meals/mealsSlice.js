import { createSlice } from 'redux-starter-kit';
import { MEALS } from '../../data';

const initialState = {
  mealByIds: MEALS.reduce((result, current) => {
    return { ...result, [current.id]: { ...current } };
  }, {}),
  favoriteMealIds: []
};
const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    toggleFavoriteMealById(state, action) {
      const id = action.payload;
      const idIndex = state.favoriteMealIds.findIndex(mealId => mealId === id);
      
      if (idIndex >= 0) {
        state.favoriteMealIds.splice(idIndex, 1);
      } else {
        state.favoriteMealIds.push(id);
      }
    }
  }
});

export default mealsSlice.reducer;
export const { toggleFavoriteMealById } = mealsSlice.actions;
