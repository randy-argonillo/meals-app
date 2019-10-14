import React from 'react';

import HeaderButtons, { Item } from './HeaderButtons';

export default function Drawer({ navigation }) {
  return (
    <HeaderButtons>
      <Item
        title="menu"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  );
}


Drawer.defaultProps = {
  navigation: {
    toggleDrawer: () => {}
  }
}