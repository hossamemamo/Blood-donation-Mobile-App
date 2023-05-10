import React from 'react';
//React navigation stack
import RootStack from './navigators/RootStack';
import Blood from './screens/Blood';
import Home from './screens/Home';
import Clothes from './screens/Clothes';
export default function App() {
  return <RootStack/>;
}