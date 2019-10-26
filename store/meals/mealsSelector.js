import { createSelector } from 'redux-starter-kit';

import { selectActiveFilters } from './filterSelectors';

const selectMeals = state => state.meals;

const selectFavoriteMealIds = createSelector(
  [selectMeals],
  meals => meals.favoriteMealIds
);

export const selectAllMeals = createSelector(
  [selectMeals],
  meals => {
    const { mealByIds } = meals;
    return Object.keys(mealByIds).reduce((result, id) => {
      const meal = mealByIds[id];
      return [...result, meal];
    }, []);
  }
);

export const selectFilteredMeals = createSelector(
  [selectAllMeals, selectActiveFilters],
  (meals, filters) => {
    const filterKeys = Object.keys(filters);

    if (filterKeys.length === 0) {
      return meals;
    }

    return meals.filter(meal =>
      filterKeys.every(filterKey => filters[filterKey] === meal[filterKey])
    );
  }
);

export const selectFavoriteMeals = createSelector(
  [selectMeals, selectFavoriteMealIds],
  (meals, favoriteMealIds) => {
    return favoriteMealIds.map(id => meals.mealByIds[id]);
  }
);

export const isFavoriteMeal = meal =>
  createSelector(
    [selectFavoriteMeals],
    favoriteMeals => {
      return favoriteMeals.some(item => item.id === meal.id);
    }
  );
