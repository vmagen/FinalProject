import React from 'react'
import { View , Image} from 'react-native'
import styleSheet from '../Pages/PageStyle';
import FCAvatar from './FCAvatar';
import logo from '../assets/logoArvino.png';

export default function FCHeader() {
    return (
        <View style={styleSheet.row}>
            <View style={styleSheet.halfRow}>
                <Image
                    source={logo}
                    style={styleSheet.logo}
                />
            </View>
            <View style={styleSheet.halfRow}>
                <FCAvatar />
            </View>
        </View>
    )
}
