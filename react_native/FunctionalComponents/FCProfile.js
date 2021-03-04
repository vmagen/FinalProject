import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text, Button } from 'react-native';
import styleSheet from '../Pages/PageStyle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const FCProfile = () => {
    const navigation =useNavigation();
    const logOut = () => {
        AsyncStorage.removeItem('login');
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={styleSheet.container}>
            <View>
                <Text>Profile Page</Text>
                <Button
                    style={styleSheet.button}
                    onPress={logOut}
                    title="Log out"   
                ></Button>
            </View>
        </SafeAreaView>
    )

}

export default FCProfile;