import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data';
import { selectAllMeals, selectFilteredMeals } from '../store/meals/mealsSelector';


export default function MealsListScreen(props) {
  const filteredMeals = useSelector(selectFilteredMeals);
  
  const categoryId = props.navigation.getParam('categoryId');
  const meals = filteredMeals.filter(meal => meal.categoryIds.includes(categoryId));

  return (
    <View style={styles.container}>
      <MealList meals={meals} navigation={props.navigation} />  
    </View>
  );
}

MealsListScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const category = CATEGORIES.find(category => category.id === categoryId);

  return {
    headerTitle: category.title
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
});
