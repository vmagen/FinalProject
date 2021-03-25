import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FCHomePage from '../FunctionalComponents/FCHomePage';
import FCGroups from '../FunctionalComponents/FCGroups';
import FCWineriesAndWines from '../FunctionalComponents/FCWineriesAndWines';
import FCEventsScrollView from '../FunctionalComponents/FCEventsScrollView';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FCCamera from '../FunctionalComponents/FCCamera';
import FCEventsContainer from '../FunctionalComponents/FCEventsContainer';

const Tab = createMaterialBottomTabNavigator();

const MaterialTabPage = () => {
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
            <MaterialCommunityIcons name="account-group" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen name="Camera" component={FCCamera}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Wines" component={FCWineriesAndWines}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="glass-wine" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Events" component={FCEventsContainer}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
     
    </Tab.Navigator>
  )

}
export default MaterialTabPage;
