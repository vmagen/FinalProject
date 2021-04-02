import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialTabPage from './Pages/MaterialTabPage';
import Pages from './Pages/navigationPages';
import messages from './helpers/messages.json';

const Stack = createStackNavigator();

function App() {
const [loggedIn, setloggedIn] = useState(false);
const [picture, setPicture] = useState('https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg');
const [name, setName] = useState( messages.register);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('login');
      if (jsonValue !== null) {
        const temp = await JSON.parse(jsonValue);
        setPicture(temp.picture);
        setName(temp.name);
        setloggedIn(true);
      }
      else {
        console.log("not logged in!");

      }
    } catch (e) {
      console.log(e);
    }
  }

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