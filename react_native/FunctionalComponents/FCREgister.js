import React from 'react'
import { View, SafeAreaView } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import headers from '../helpers/messages.json';
import FCHeader from './FCHeader';
import StyleSheet from '../Pages/PageStyle';
import FCFacebookLogin from './FCFacBookLogin';
import { Input, Button } from 'react-native-elements';

export default function FCREgister() {
    return (
        <SafeAreaView style={StyleSheet.container}>
            <FCHeader />
            <View >
                <Text h4 style={StyleSheet.h4Text}>{headers.createAccount}</Text>
            </View>
            <View>
                <FCFacebookLogin />
            </View>
            <Divider style={{ marginTop: 10 }} />
            <View>
                <Input
                    placeholder={headers.insertName}
                    rightIcon={{ type: 'font-awesome', name: 'user' }}
                    inputContainerStyle={StyleSheet.input}
                />
                <Input
                    placeholder={headers.insertEmail}
                    rightIcon={{ type: 'font-awesome', name: 'envelope' }}
                    inputContainerStyle={StyleSheet.input}
                />
                <Input
                    placeholder={headers.insertPassword}
                    rightIcon={{ type: 'font-awesome', name: 'lock' }}
                    inputContainerStyle={StyleSheet.input}
                />
                <Input
                    placeholder={headers.insertPasswordSecond}
                    rightIcon={{ type: 'font-awesome', name: 'lock' }}
                    inputContainerStyle={StyleSheet.input}

                />
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Button
                        title={headers.createAccount}
                        buttonStyle={StyleSheet.button}
                    />
                    <Text h5>{headers.alreadyHave}</Text>
                    <Button
                        title={headers.login}
                        buttonStyle={StyleSheet.button}

                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
