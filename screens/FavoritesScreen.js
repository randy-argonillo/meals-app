import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useFocusEffect } from 'react-navigation-hooks';

import MealList from '../components/MealList';
import { getfavorites } from '../data';
import Drawer from '../components/Drawer';

export default function FavoritesScreen(props) {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    console.log('FavoritesScreen useEffect');
    setFavorites(getfavorites());
  });

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
