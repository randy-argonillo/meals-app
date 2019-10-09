import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function Spinner({ show }) {
  if (!show) return null;

  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <ActivityIndicator size="small" color='#0000ff'/>
    </View>
  );
}