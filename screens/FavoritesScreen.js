import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useFocusEffect } from 'react-navigation-hooks';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import Drawer from '../components/Drawer';
import { selectFavoriteMeals } from '../store/meals/mealsSelector';

export default function FavoritesScreen(props) {
  const favorites = useSelector(selectFavoriteMeals);

  return (
    <View style={styles.container}>
      <MealList meals={favorites} navigation={props.navigation} />
    </View>
  );
}

FavoritesScreen.navigationOptions = options => {
  const { navigation } = options;
  return {
    headerTitle: 'Favorites',
    headerLeft: <Drawer navigation={navigation} />
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
});
