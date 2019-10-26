import React from 'react';
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import MealsNavigation from './navigation/MealsNavigation'; 
import store from './store/store';

useScreens();

export default function App() {
  return (
    <Provider store={store}>
      <MealsNavigation />
    </Provider>
  );
}

