import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialTabPage from './Pages/MaterialTabPage';
import Login from './Pages/LoginPages';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


function App() {
  const [state, setstate] = useState();

  useEffect(() => {
    let user = AsyncStorage.getItem('login');
    if (user != null) {
      setstate(user);
    }
  }, [])

  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="MaterialTabPage">
        <Stack.Screen name="MaterialTabPage" component={MaterialTabPage} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;