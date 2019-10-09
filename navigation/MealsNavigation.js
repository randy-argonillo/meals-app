import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';
import MealCategoriesScreen from '../screens/MealCategoriesScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import MealsListScreen from '../screens/MealsListScreen';
import colors from '../constants/colors';

const stackScreensNavigator = createStackNavigator(
  {
    MealCategories: {
      screen: MealCategoriesScreen
    },
    MealsList: MealsListScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: 'white',
      headerTitle: 'test'
    }
  }
);

export default createAppContainer(stackScreensNavigator);
