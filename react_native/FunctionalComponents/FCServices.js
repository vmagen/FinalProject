import React, { useState, useEffect, } from 'react';
import { View, Image, Text, ActivityIndicator, ScrollView } from 'react-native';
import styleSheet from '../Pages/PageStyle'
import helpers from '../helpers/helperFunctions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-paper';

function FCServices(props) {
  const [services, setServices] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    getServices();
  }, []);

  function getServices() {
    fetch(helpers.getApi() + '/Service',
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        return res.json();
      })
      .then(
        (result) => {
          setServices(result);

        })
      .then(
        () => { setisLoaded(true) }
        ,
        (error) => {
          console.log("err post=", error);
        });

  }

  if (isLoaded) {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styleSheet.scrollView}>
        {services.map(item => (
          <View style={{ borderColor: 'gray', borderStyle: 'solid', borderWidth: 1 }} key={item.serviceId}>
            <View style={{ alignContent: 'flex-start', width: 200 }}>
              <Image
                style={{ width: 50, height: 50, margin: 30 }}
                source={{ uri: item.wineryImg }}>
              </Image>
              <Text style={{ textAlign:'right' }}>יקב {item.wineryName}</Text>
            </View>
            <View>
              <View style={{ alignItems: 'center', padding:30 }}>
                <Text>{item.serviceName}</Text>
                <Text style={{ width: 250 }}>{item.content}</Text>
              </View>
              <Image
                source={{ uri: helpers.ReturnRandomData(item.images).ImgPath }}
                style={styleSheet.event} />
            </View>
          </View>
        ))}
      </ScrollView>
    )
  }
  else {
    return (
      <ActivityIndicator size='large' />
    )
  }
}
export default FCServices;