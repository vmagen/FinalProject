import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FCHomePage from '../FunctionalComponents/FCHomePage';
import FCWineries from '../FunctionalComponents/FCWineries';
import FCWines from '../FunctionalComponents/FCWines';

const Tab = createMaterialBottomTabNavigator();


function MaterialTabPage() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="yellow"
     >
      <Tab.Screen name="Home" component={FCHomePage} />
      <Tab.Screen name="Settings" component={FCWineries} />
      <Tab.Screen name="test1" component={FCWines} />
      <Tab.Screen name="test2" component={FCWines} />
    </Tab.Navigator>
  )

}
export default MaterialTabPage;
