import React from 'react';
import { useScreens } from 'react-native-screens';

import MealsNavigation from './navigation/MealsNavigation'; 

useScreens();

export default function App() {
  return (
    <MealsNavigation />
  );
}

