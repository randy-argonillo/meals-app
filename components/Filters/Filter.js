import React, { useState } from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';

export default function Filter({ title, onChange }) {
  const [filterSwitch, setFilterSwitch] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Switch
        value={filterSwitch}
        onValueChange={val => {
          setFilterSwitch(val);
          onChange(val);
        }}
        trackColor={{
          true: 'tomato',
          false: '#ffa494'
        }}
        thumbColor="#ffa494"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  }
});
