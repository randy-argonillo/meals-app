import React from 'react';
import { View, Text } from 'react-native';
import Drawer from '../components/Drawer';

export default function FilterScreen(props) {
  return (
    <View>
      <Text>Filter Screen</Text>
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