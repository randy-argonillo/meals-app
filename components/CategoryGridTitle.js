import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function CategoryGridTitle(props) {
  return (
    <TouchableOpacity
      style={styles.cell}
      onPress={props.onSelect}
    >
      <View style={{ backgroundColor: props.color, ...styles.container}} >
        <Text style={{...styles.title, color: props.fontColor}} numberOfLines={2}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    margin: 15,
    height: 150
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 12,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
