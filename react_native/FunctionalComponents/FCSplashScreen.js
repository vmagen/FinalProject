import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,

} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import messages from '../helpers/messages.json';
import { useNavigation } from '@react-navigation/native';

const FCSplashScreen = (props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animatable.View
        style={[styles.footer, {
          backgroundColor: colors.background
        }]}
        animation="fadeInUpBig"
      >
        <Text style={[styles.title, {
          color: colors.text
        }]}>{props.name}</Text>
        <Text style={styles.text}>{props.description}</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => {
            props.hideModal();
            navigation.navigate('Login', {
              screen: 'groupChat',
              params: {
                name: props.name,
                description: props.description,
                picture: props.picture,
                id: props.id
              }
            });

          }}>
            <LinearGradient
              colors={['#691A1A', '#630f0f']}
              style={styles.signIn}>
              <MaterialIcons
                name="navigate-before"
                color="#fff"
                size={20}
              />
              <Text style={styles.textSign}>{messages.login}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default FCSplashScreen;

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: width * 0.9,
  },

  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 30,
    paddingLeft: 70
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
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  }
});

