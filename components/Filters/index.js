import React from 'react';
import { View, StyleSheet } from 'react-native';

import Filter from './Filter';

export default function Filters() {
  return (
    <View style={styles.container}>
      <Filter title="Gluten Free" />
      <Filter title="Vegan" />
      <Filter title="Vegetarian" />
      <Filter title="Lactose Free" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  }
});
