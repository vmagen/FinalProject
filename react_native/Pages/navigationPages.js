import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../FunctionalComponents/FCRegister';
import FCProfile from '../FunctionalComponents/FCProfile';
import FCLogin from '../FunctionalComponents/FCLogin';
import FCQuestionere from '../FunctionalComponents/FCQuestionere';
import FCGroupChat from '../FunctionalComponents/FCGroupChat';

const Stack = createStackNavigator();

const Pages = () => (
    <Stack.Navigator  initialRouteName="signup" headerMode='none' >
        <Stack.Screen name="login"  component={FCLogin}/>
        <Stack.Screen name="signup" component={SignUpScreen}/>
        <Stack.Screen name="profile" component={FCProfile}/>
        <Stack.Screen name="questionere" component={FCQuestionere}/>
        <Stack.Screen name="groupChat" component={FCGroupChat}/>
    </Stack.Navigator>
);

export default Pages;