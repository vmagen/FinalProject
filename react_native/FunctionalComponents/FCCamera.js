import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoUri, setsphotoUri] = useState({uri:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png'})
  const bWidth = Dimensions.get('window').width;
  const bHeight = Dimensions.get('window').height;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const btnSnap = async () => {
      let photo = await Camera.takePictureAsync({
        quality: 0.4,
        base64: true,
        exif: false
      }, ()=>{console.log(photo)});
      setsphotoUri({
        photoUri: photo.uri,
      });
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={[styles.container, {
      flexDirection: 'column'
    }]}>
      <Camera style={styles.camera} type={type}>
        <TouchableOpacity onPress={btnSnap}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <View style={{
              width: bWidth * 0.20,
              height: bWidth * 0.20,
              backgroundColor: 'red',
              marginTop: bHeight*0.75,
              marginLeft: bWidth *0.4,
              borderRadius: 100,
              borderColor:'black',
              borderStyle: 'solid',
              borderWidth:'6'
            }}
             />
          </View>
        </TouchableOpacity>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  }
});
