import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,

} from 'react-native';
import { Input, Icon, Text, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import messages from '../helpers/messages.json';
import styleSheet from '../Pages/PageStyle';
import helpers from '../helpers/helperFunctions';
import bitLogo from '../assets/BIT_logo.jpg'
import { Alert } from 'react-native';

const FCEventRegister = (props) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container,{marginBottom:100}]}>

      <Animatable.View
        style={[styles.footer, {
          backgroundColor: colors.card,
          borderStyle: 'solid',
          borderWidth: 1,
        }]}
        animation="fadeInUpBig"
      >
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 0.5 }}><Icon
            reverse
            name='close'
            type='ionicon'
            color='#691A1A'
            onPress={props.hideModal}
          />
          </View>
          <View style={{ alignContent: 'center', flex: 0.5 }}>
            <Text style={{ textAlign: 'right' }}>
              {` ${messages.register}  ל${props.name} `}
            </Text>
            <Text style={{ textAlign: 'right' }}>
              בתאריך {` ${helpers.ReturnDate(props.date)}`}
            </Text>
            <Text style={{ textAlign: 'right' }}>
              בשעה {` ${props.time}`}
            </Text>

          </View>
        </View>
        <View>

          <Input
            placeholder={messages.insertFullName}
            inputContainerStyle={styleSheet.input}
          />
          <Input
            placeholder={messages.insertPhone}
            inputContainerStyle={styleSheet.input}
          />
          <Input
            placeholder={messages.insertEmail}
            inputContainerStyle={styleSheet.input}
          />
          <Input
            placeholder={messages.insertNumPeople}
            inputContainerStyle={styleSheet.input}
          />
          <Image
            source={bitLogo}
            style={{ width: 70, height: 70, alignSelf: 'center' }}
            onPress={() => {
              Alert.alert("תודה שנרשמת!")
            }}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default FCEventRegister;

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: width * 0.95,
    alignContent: 'center',
    padding: 10,
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 30

  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    color: 'grey',
    marginTop: 5
  },
  button: {
    alignItems: 'flex-start',
    marginTop: 30
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  }
});

