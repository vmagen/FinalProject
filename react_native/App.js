import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FCHomePage from './FunctionalComponents/FCHomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FCWineries from './FunctionalComponents/FCWineries';
import { SafeAreaView } from 'react-native';
import FCHeader from './FunctionalComponents/FCHeader';
import FCGroups from './FunctionalComponents/FCGroups';
import FCWineriesMain from './FunctionalComponents/FCWineriesAndWines';
import FCWineriesCategories from './FunctionalComponents/FCWineriesCategories';

function App() {
  const Tab = createMaterialBottomTabNavigator();

  function ReturnSamplePage() {
    return <SafeAreaView>
      <View>
        <Text>Hello Sample page!</Text>
      </View>
    </SafeAreaView>
  }

  return (
    <NavigationContainer>
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
        <Tab.Screen name="Camera" component={ReturnSamplePage}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Wines" component={FCWineriesMain}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="access-point" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Events" component={FCWineriesCategories}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="group" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;