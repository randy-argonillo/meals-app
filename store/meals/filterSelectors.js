import { createSelector } from 'redux-starter-kit';

export const selectFilters = state => state.filters;

export const selectActiveFilters = createSelector(
  selectFilters,
  filters =>
    Object.keys(filters).reduce((result, filterKey) => {
      const filterVal = filters[filterKey];
      if (!filterVal) {
        return result;
      }

      return { ...result, [filterKey]: filterVal };
    }, {})
);
