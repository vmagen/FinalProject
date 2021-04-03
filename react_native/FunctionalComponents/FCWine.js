import React from 'react'
import { View, Image } from 'react-native';
import { Text, Icon } from 'react-native-elements'
import styleSheet from '../Pages/PageStyle';
import FCHeader from './FCHeader';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import FCUserComments from './FCUserComments';
import { Divider } from 'react-native-paper';
import headers from '../helpers/messages.json';

export default function FCWine(props) {
    const navigation = useNavigation();

    return (
        <View style={styleSheet.container}>
            <FCHeader />
            <View>
                <View style={styleSheet.wineryHeader}>
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
                    <Text h2 style={styleSheet.h4Text}> יקב {props.route.params.wineryName}</Text>
                    <Image
                        source={{ uri: props.route.params.wineryImage }}
                        style={[styleSheet.wine, { width: 50, height: 50 }]}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ flexDirection: 'column', width: 150 }}>
                        <Text style={styleSheet.wineRate}> 4.5 </Text>
                        <Text h4 style={styleSheet.h4Text}>{props.route.params.name}</Text>
                        <Text h5 style={{ marginLeft: 20, alignSelf: 'stretch', textAlign: 'right' }}>{props.route.params.content}</Text>
                    </View>
                    <View style={{ marginLeft: 50 }}>
                        <Image
                            source={{ uri: props.route.params.image }}
                            style={[styleSheet.wine, { height: 250, width: 140 }]} />
                    </View>
                </View>
                <Divider />
                <View>
                    <Text h4 style={{ textAlign: 'right', padding: 10 }} >{headers.comments}</Text>
                </View>
            </View>
            <FCUserComments wineId={props.route.params.id} />
        </View>
    )
}

