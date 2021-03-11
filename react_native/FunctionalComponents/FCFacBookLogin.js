import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { ResponseType } from 'expo-auth-session';
import { Button, Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import headers from '../helpers/messages.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { createIconSetFromFontello } from 'react-native-vector-icons';

WebBrowser.maybeCompleteAuthSession();
const FB_APP_ID = "174194160927637";

export default function FCFacebookLogin() {
    const navigation = useNavigation();
    
    const [request, response, promptAsync, token] = Facebook.useAuthRequest({
        clientId: FB_APP_ID,
        responseType: ResponseType.Token,
    });

    const [user, setUser] = React.useState({
        email: '',
        name: '',
        picture: 'null'
    });

    async function LoginTofacebook() {
        await promptAsync();
        //console.log("request", request);
        if (response?.type === 'success') {
           // console.log("ACCESS_TOKEN", response.params.access_token);
            //console.log(response?.type);
            loadDataFromServer(response.params.access_token);
            //Add save to Asyncstorage the picture and name
            console.log("USER: ", user);
            AsyncStorage.setItem('login', user);
            //navigation.push('Home');
        }
        else (response?.type === 'error')
        {

        }
    }

    async function loadDataFromServer(token) {
        console.log("loaddata",token )
        const details = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture`);
        console.log("USER: ", user);
        let user1 = await details.json();
        console.log(`name: ${user1.name}\npicture: ${user1.picture.data.url}\nemail: ${user1.email}`);
        await setUser({
            email: user1.email,
            name: user1.name,
            picture: user1.picture.data.url
        });
    }


    return (
        <Button
            disabled={!request}
            title={headers.continueWithFb}
            onPress={LoginTofacebook}
            style={{ width: 250, alignSelf: 'center' }}
            icon={
                <Ionicons
                    name="logo-facebook"
                    size={26}
                    color="#3b5998"
                />
            }
        />

    );
}
