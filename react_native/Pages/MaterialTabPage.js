import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FCHomePage from '../FunctionalComponents/FCHomePage';
import FCGroups from '../FunctionalComponents/FCGroups';
import FCREgister from '../FunctionalComponents/FCREgister';
import FCWineriesAndWines from '../FunctionalComponents/FCWineriesAndWines';
import FCEvents from '../FunctionalComponents/FCEvents';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const  MaterialTabPage=()=> {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        barStyle={{ backgroundColor: '#691A1A' }}
      >
        <Tab.Screen name="Home" component={FCHomePage}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Groups" component={FCGroups}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="group" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Camera" component={FCREgister}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Wines" component={FCWineriesAndWines}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="access-point" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Events" component={FCEvents}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="group" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
  )

}
export default MaterialTabPage;
