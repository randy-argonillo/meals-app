import React from 'react';
import { FlatList } from 'react-native';

import MealItem from '../components/MealItem';

const renderMealItem = navigation => data => {
  return (
    <MealItem
      meal={data.item}
      onSelect={() => {
        navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: data.item.id
          }
        });
      }}
    />
  );
};

export default function MealList({ meals, navigation }) {
  return (
    <FlatList
      data={meals}
      keyExtractor={item => item.id}
      renderItem={renderMealItem(navigation)}
    />
  );
}


