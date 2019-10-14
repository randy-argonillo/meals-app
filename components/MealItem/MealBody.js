import React, { useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';

import Spinner from '../Spinner';

export default function MealBody({ mealImage, style }) {
  const [showSpinner, setShowSpinner] = useState(false);
  return (
    <View style={[styles.container, style ]}>
     <Spinner show={showSpinner} />
      <Image
        source={{ uri: mealImage }}
        onLoad={() => setShowSpinner(false)}
        onLoadStart={() => setShowSpinner(true)}
        style={styles.image}
      />
    </View>
  );
}

MealBody.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
