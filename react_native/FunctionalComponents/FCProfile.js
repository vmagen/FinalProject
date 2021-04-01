import React from 'react';
import { Text, View, Button, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, StyleSheet } from 'react-native';
import styleSheet from '../Pages/PageStyle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import FCHeader from './FCHeader';

const FCProfile = () => {
    const navigation = useNavigation();

    const logOut = async () => {
       const temp= await AsyncStorage.removeItem('login');
        alert('user Logged out ! hope to see you soon!');
        console.log("logged out", temp);
        navigation.navigate('Home');
    }

    return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <FCHeader/>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <View style={styles.btnContainer}>
                            <Button title="LOG OUT" onPress={logOut} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    textInput: {
        height: 35,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12
    }
});
export default FCProfile;