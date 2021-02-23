import React from 'react';
import * as Facebook from 'expo-facebook';
import { Alert ,Button} from 'react-native';
import { PanResponder } from 'react-native';

function FCFacebookLogin1() {
    const [picture, setPicture] = React.useState([]);

    async function loginToFb() {
        try {
            await Facebook.initializeAsync('874957936407265');
            const { type, token, expires, permissions, declinedPermissions } =
                await Facebook.logInWithReadPermissionsAsync({
                    permissions: ['public_Profile']
                });
            if (type === 'success') {
                const response = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${token}`);
                let res = await response.json();
                Alert.alert('Logged in!!!', `Name:${res.name}\nEmail:${res.email}\nPicture:${res.picture.data.url}`);
            }
            else { type === 'cancel' }
        }
        catch ({ message }) {
            console.log(`Facebook login Failed ${message}`);
        }
    }

    return (
        <Button
            title="Countinue with Facebook"
            onPress={loginToFb}
        />
    );
}


export default FCFacebookLogin1;