import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { ResponseType } from 'expo-auth-session';
import { Button, Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import headers from '../helpers/messages.json';

WebBrowser.maybeCompleteAuthSession();

export default function FCFacebookLogin() {
    const [request, response, promptAsync, token] = Facebook.useAuthRequest({
        clientId: '174194160927637',
        responseType: ResponseType.Token,
    });

    const [picture, setPicture] = React.useState();

    async function LoginTofacebook() {
        await promptAsync();
        if (response?.type === 'success') {

            console.log("ACCESS_TOKEN", response.params.access_token);
            console.log(response?.type);
            loadDataFromServer(response.params.access_token);
            //Add save to Asyncstorage the picture and name
        }
        else (response?.type === 'error')
        {

        }
    }

    async function loadDataFromServer(token) {
        const details = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture`);
        let userDetails = await details.json();
        console.log(`name: ${userDetails.name}\npicture: ${userDetails.picture.data.url}`);
    }


    return (
        <Button
            disabled={!request}
            title={headers.continueWithFb}
            onPress={LoginTofacebook}
            style={{width:250,alignSelf:'center'}}
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
