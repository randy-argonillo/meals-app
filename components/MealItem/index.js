import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MealHeader from './MealHeader';
import MealFooter from './MealFooter';
import MealBody from './MealBody';

export default function MealItem({ meal }) {
  return (
    <View style={{paddingHorizontal: 2}}>
      <View style={styles.container}>
        <MealHeader
          title={meal.title}
          image={meal.imageUrl}
          style={{ height: '15%' }}
        />
        <MealBody mealImage={meal.imageUrl} style={{ height: '70%' }} />
        <MealFooter meal={meal} style={{ height: '20%' }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    borderRadius: 3.84,
    borderColor: '#fcfcfc'
    // borderWidth: 1
  }
});
