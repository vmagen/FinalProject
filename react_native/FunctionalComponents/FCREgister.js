import React from 'react'
import { View, SafeAreaView } from 'react-native';
import {Text,Button} from 'react-native-elements';
import headers from '../helpers/messages.json';
import FCHeader from './FCHeader';
import StyleSheet from '../Pages/PageStyle';
import FCFacBookLogin from './FCFacBookLogin';

export default function FCREgister() {
    return (
        <SafeAreaView style={StyleSheet.container}>
            <FCHeader/>
            <View >
                <Text h4 style={StyleSheet.h4Text}>{headers.createAccount}</Text>
            </View>
            <View>
               <FCFacBookLogin/>
            </View>
        </SafeAreaView>
    )
}
