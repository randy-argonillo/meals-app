import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import {
  HeaderButtons,
  HeaderButton,
  Item
} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import { toggleFavoriteMealById } from '../store/meals/mealsSlice';
import { isFavoriteMeal } from '../store/meals/mealsSelector';
import { MEALS, toggleFavorite, getfavorites } from '../data';

const IoniconHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color="white"
  />
);

export default function MealDetailScreen(props) {
  const dispatch = useDispatch();
  const { navigation } = props;
  const meal = navigation.getParam('meal');

  const isFavorite = useSelector(isFavoriteMeal(meal));

  const toggleFavoriteMeal = () => {
    console.log('will dispatch');
    dispatch(toggleFavoriteMealById(meal.id));
  };

  useEffect(() => {
    navigation.setParams({
      toggleFavoriteMeal
    });
  }, [meal.id]);

  useEffect(() => {
    console.log('isFavorite', isFavorite);
    navigation.setParams({ isFavorite });
  }, [isFavorite]);

  return (
    <View>
      <Text>Meal Detail Screen</Text>
    </View>
  );
}

MealDetailScreen.navigationOptions = data => {
  const { navigation } = data;
  const meal = navigation.getParam('meal');
  const isFavorite = navigation.getParam('isFavorite');
  const toggleFavoriteMeal = navigation.getParam('toggleFavoriteMeal');

  return {
    headerTitle: meal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={IoniconHeaderButton}>
        <Item
          title="star"
          iconName="ios-star"
          onPress={() => {
            toggleFavoriteMeal(meal.id);
          }}
          buttonStyle={{
            color: isFavorite ? '#f9ca24' : 'white'
          }}
        />
      </HeaderButtons>
    )
  };
};

function getMealFromNav(navigation) {
  const mealId = navigation.getParam('mealId');
  return MEALS.find(item => item.id === mealId);
}

function checkIsFavorite(meal) {
  const favorites = getfavorites();
  const foundFavorite = favorites.find(item => item.id === meal.id);
  return !!foundFavorite;
}
