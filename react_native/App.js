import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialTabPage from './Pages/MaterialTabPage';
import Pages from './Pages/navigationPages';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="MaterialTabPage">
        <Stack.Screen name="MaterialTabPage" component={MaterialTabPage} />
        <Stack.Screen name="Login" component={Pages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;