import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Filters from '../components/Filters';
import Drawer from '../components/Drawer';

export default function FilterScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filters</Text>
      <Filters />
    </View>
  );
}

FilterScreen.navigationOptions = options => {
  const { navigation } = options;
  return {
    headerTitle: 'Filters',
    headerLeft: <Drawer navigation={navigation} />
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    width: '100%',
    textAlign: 'center'
  }
});