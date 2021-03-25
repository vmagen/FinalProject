import React from 'react'
import { View, Image } from 'react-native';
import { Text, Icon } from 'react-native-elements'
import styleSheet from '../Pages/PageStyle';
import FCHeader from './FCHeader';
import { useNavigation } from '@react-navigation/native';


export default function FCWinery(props) {
    const navigation = useNavigation();

    return (
        <View style={styleSheet.container}>

            <FCHeader />
            <Icon
                onPress={
                    () => {
                        navigation.goBack()
                    }
                }
                reverse
                name='chevron-back-outline'
                type='ionicon'
                color='#691A1A'
            />
            <Text h2 style={styleSheet.h4Text}>{props.route.params.name}</Text>
            <Image
                source={{ uri: props.route.params.image }}
                style={styleSheet.wine} />
        </View>
    )
}
