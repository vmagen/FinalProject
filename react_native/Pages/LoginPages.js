import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../FunctionalComponents/FCLogin';
import SignUpScreen from '../FunctionalComponents/FCREgister';
import FCProfile from '../FunctionalComponents/FCProfile';
import FCLogin from '../FunctionalComponents/FCLogin';
import FCQuestionere from '../FunctionalComponents/FCQuestionere';

const Stack = createStackNavigator();

const Login = () => (
    <Stack.Navigator  initialRouteName="signup" headerMode="none" >
        <Stack.Screen name="login"  component={FCLogin}/>
        <Stack.Screen name="signup" component={SignUpScreen}/>
        <Stack.Screen name="profile" component={FCProfile}/>
        <Stack.Screen name="questionere" component={FCQuestionere}/>

    </Stack.Navigator>
);

export default Login;