import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../FunctionalComponents/FCREgister';
import FCProfile from '../FunctionalComponents/FCProfile';
import FCLogin from '../FunctionalComponents/FCLogin';
import FCQuestionere from '../FunctionalComponents/FCQuestionere';
import FCGroupChat from '../FunctionalComponents/FCGroupChat';
import FCWine from '../FunctionalComponents/FCWine';
import FCWinery from '../FunctionalComponents/FCWinery';
import CCActivityIndicator from '../Componenets/CCActivityIndicator';
import FCQuestionere1 from '../FunctionalComponents/FCQuestionere1';
import CCGaleryUpload from '../Componenets/CCGalleryUpload';

const Stack = createStackNavigator();

const Pages = () => (
    <Stack.Navigator  initialRouteName="signup" headerMode='none' >
        <Stack.Screen name="login"  component={FCLogin}/>
        <Stack.Screen name="signup" component={SignUpScreen}/>
        <Stack.Screen name="profile" component={FCProfile}/>
        <Stack.Screen name="questionere" component={FCQuestionere1}/>
        <Stack.Screen name="groupChat" component={FCGroupChat}/>
        <Stack.Screen name="wine" component={FCWine}/>
        <Stack.Screen name="winery" component={FCWinery}/>
        <Stack.Screen name="waitPage" component={CCActivityIndicator}/>
        <Stack.Screen name="Gallery" component={CCGaleryUpload}/>

        
    </Stack.Navigator>
);

export default Pages;