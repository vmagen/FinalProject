import React ,{useState} from 'react'
import { ScrollView, View } from 'react-native';
import { Icon, Avatar, Text, Button } from 'react-native-elements';
import helpers from '../helpers/helperFunctions';
import styleSheet from '../Pages/PageStyle';
import headers from '../helpers/messages.json'
import { SafeAreaView } from 'react-native';
import FCEventRegister from './FCEventRegister';

export default function FCEvent(props) {
    const [shouldShow, setShouldShow] = useState(false);
    
    const hideModal = () => {
        setShouldShow(false);
      }
    return (
        <SafeAreaView style={styleSheet.container}>
            <View>
                <Icon
                    onPress={props.toggleShow}
                    reverse
                    name='chevron-back-outline'
                    type='ionicon'
                    color='#691A1A'
                />
            </View>
            <ScrollView >
                <View style={{ alignItems: 'center' }}>
                    <Text h4 style={styleSheet.h4Text}>{props.event.name}</Text>
                    <Avatar
                        source={{ uri: props.event.picture }}
                        size='large'
                        rounded={true} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text>  {helpers.ReturnDate(props.event.date)}  </Text>
                        <Text>  {props.event.time} </Text>
                        <Text>  {headers.when}:  </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text h4>  {headers.DetailsOnEvent} </Text>
                        <Text style={{ textAlign: 'right', width: 300, padding: 10, borderColor: 'black', borderStyle: 'solid', borderWidth: 2 }}>{props.event.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Button
                            title={headers.register}
                            buttonStyle={styleSheet.button}
                            onPress={()=>{setShouldShow(true)}}
                        />
                        <Text style={{ alignSelf: 'center' }}>
                            {`${headers.leftWith}  ${props.event.ticketsLeft} ${headers.tickets}`}</Text>
                    </View>
                </View>
            </ScrollView>
            {shouldShow ? (
            <FCEventRegister id={props.event.id} name={props.event.name} date={props.event.date} time={props.event.time} hideModal={hideModal} />
        ) : null}
        </SafeAreaView>
    )
}
