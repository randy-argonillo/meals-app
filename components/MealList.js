import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from '../components/MealItem';
import { selectFavoriteMeals } from '../store/meals/mealsSelector';

const renderMealItem = (navigation, favoriteMeals) => data => {
  const isFavorite = favoriteMeals.some(item => item.id === data.item.id);
  
  return (
    <MealItem
      meal={data.item}
      onSelect={() => {
        navigation.navigate({
          routeName: 'MealDetail',
          params: {
            meal: data.item,
            isFavorite
          }
        });
      }}
    />
  );
};

export default function MealList({ meals, navigation }) {
  const favoriteMeals = useSelector(selectFavoriteMeals);
  return (
    <FlatList
      data={meals}
      keyExtractor={item => item.id}
      renderItem={renderMealItem(navigation, favoriteMeals)}
    />
  );
}
