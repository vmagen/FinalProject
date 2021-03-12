import * as Google from 'expo-google-app-auth';

function FCGMailLogin(){
    const { type, accessToken, user } = await Google.logInAsync(config);

    if (type === 'success') {
      // Then you can use the Google REST API
      let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    }
    
}

export default FCGMailLogin;