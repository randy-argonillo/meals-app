import React from 'react';
import { View, Text } from 'react-native';
import FooterItem from './FooterItem';

export default function MealFooter({ meal }) {
  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10
        }}
      >
        <FooterItem label="complexity" value={meal.complexity} />
        <FooterItem label="duration" value={`${meal.duration} min`} />
        <FooterItem label="vegan" value={meal.isVegan ? 'yes' : 'no'} />
      </View>
    </View>
  );
}
