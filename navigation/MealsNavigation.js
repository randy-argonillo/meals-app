import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';
import MealCategoriesScreen from '../screens/MealCategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import MealsListScreen from '../screens/MealsListScreen';
import colors from '../constants/colors';

import { Ionicons } from '@expo/vector-icons';

const defaultHeaderOptions = {
  headerStyle: {
    backgroundColor: colors.primary
  },
  headerTintColor: 'white'
};

const mealsScreensNavigator = createStackNavigator(
  {
    MealCategories: {
      screen: MealCategoriesScreen
    },
    MealsList: MealsListScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      ...defaultHeaderOptions
    }
  }
);

const favoritesStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      ...defaultHeaderOptions
    }
  }
);

const filterStackNavigator = createStackNavigator(
  {
    Filter: FilterScreen
  },
  { defaultNavigationOptions: { ...defaultHeaderOptions } }
);

const tabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: mealsScreensNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        )
      }
    },
    Favorites: {
      screen: favoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

const drawerNavigator = createDrawerNavigator({
  Meals: tabNavigator,
  Filter: filterStackNavigator
}, {
  contentOptions: {
    activeTintColor: 'tomato'
  }
});

export default createAppContainer(drawerNavigator);
