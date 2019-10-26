import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import Filter from './Filter';
import { setFilter } from '../../store/meals/filterSlice';

export default function Filters() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Filter
        title="Gluten Free"
        onChange={value => dispatch(setFilter({ isGlutenFree: value }))}
      />
      <Filter
        title="Vegan"
        onChange={value => dispatch(setFilter({ isVegan: value }))}
      />
      <Filter
        title="Vegetarian"
        onChange={value => dispatch(setFilter({ isVegetarian: value }))}
      />
      <Filter
        title="Lactose Free"
        onChange={value => dispatch(setFilter({ isLactoseFree: value }))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  }
});
