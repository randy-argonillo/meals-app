import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator
} from 'react-native';

export default function MealHeader({ title, style }) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
}

MealHeader.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#444',
    paddingHorizontal: 10
  }
});
