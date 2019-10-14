import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data';
import CategoryGridTile from '../components/CategoryGridTitle';
import Drawer from '../components/Drawer';

const renderCategory = props => category => {
  return (
    <CategoryGridTile
      title={category.item.title}
      color={category.item.color}
      fontColor={category.item.fontColor}
      onSelect={() =>
        props.navigation.navigate({
          routeName: 'MealsList',
          params: {
            categoryId: category.item.id
          }
        })
      }
    />
  );
};

export default function MealCategoriesScreen(props) {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      renderItem={renderCategory(props)}
      numColumns={2}
    />
  );
}

MealCategoriesScreen.navigationOptions = options => {
  const { navigation } = options;
  console.log("TCL: navigation", navigation)
  
  return {
    headerTitle: 'Meal Categories',
    headerLeft: <Drawer navigation={navigation} />
  };
};
