import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FooterItem({ label, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center'
  },
  value: {
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#444'
  },
  label: {
    color: '#444',
    fontSize: 12
  }
});
