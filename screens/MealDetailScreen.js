import React from 'react';
import { View, Text } from 'react-native';
import {
  HeaderButtons,
  HeaderButton,
  Item
} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

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
  return (
    <View>
      <Text>Meal Detail Screen</Text>
    </View>
  );
}

MealDetailScreen.navigationOptions = data => {
  const { navigation } = data;
  const meal = getMealFromNav(navigation);
  const isFavoriteParam = navigation.getParam('isFavorite');
  const isFavorite =
    isFavoriteParam === undefined ? checkIsFavorite(meal) : isFavoriteParam;

  return {
    headerTitle: meal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={IoniconHeaderButton}>
        <Item
          title="star"
          iconName="ios-star"
          onPress={() => {
            toggleFavorite(meal);

            navigation.setParams({
              isFavorite: !isFavorite
            });
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
