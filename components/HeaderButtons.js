import React from 'react';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const IoniconButton = props => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color="white"
  />
);

export default props => (
  <HeaderButtons {...props} HeaderButtonComponent={IoniconButton} />
);

export { Item } from 'react-navigation-header-buttons';