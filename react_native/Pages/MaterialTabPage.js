import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from './HomePage';

const Tab = createMaterialBottomTabNavigator();

export default class MaterialTabPage extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="FirstPage"
        activeColor="#55ff00"
        inactiveColor='black'
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen
          name="FirstPage"
          component={HomePage}
          options={{
            tabBarLabel: 'First',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="eye" color={color} size={26}  />
            ),
          }}
        />
        <Tab.Screen
          name="SecondPage"
          component={HomePage}
          options={{
            tabBarLabel: 'Watch',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />

      </Tab.Navigator>
    )
  }
}
