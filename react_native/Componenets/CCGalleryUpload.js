import React from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

export default class CCGaleryUpload extends React.Component {
    static navigationOptions = {
        title: 'GALLERY',
    };

    constructor(props) {
        super(props);
        this.state = {
            photoUri: 't',
            uplodedPicUri: { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
            finalPicUri: { uri: '' }
        }

        this.uplodedPicPath = 'http://proj.ruppin.ac.il/bgroup15/prod/uploadFiles/';
    }

    btnOpenGalery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        });

        if (!result.cancelled) {
            this.setState({ photoUri: result.uri });
        }
    };

    btnUpload = () => {
        let img = this.state.photoUri;
        let imgName = 'imgFromGallery.jpg';
        this.imageUpload(img, imgName);
    };

    header = {
        'Accept': 'application/json',
        'content-type': 'multipart/form-data',
    }

    imageUpload = async (imgUri, picName) => {
        let urlAPI = "http://proj.ruppin.ac.il/bgroup15/prod/uploadpicture/";
        let dataI = new FormData();

        dataI.append('picture', {
            uri: imgUri,
            name: picName,
            type: 'image/jpg'
        });
        const config = {
            method: 'POST',
            body: dataI,
            headers: {
                'Accept': "application/json",
                'Content-Type': 'multipart/form-data',
            }

        };

        await fetch(urlAPI, config)
            .then((res) => {
                console.log('res.status=', res.status);
                if (res.status == 201) {
                    return res.json();
                }
                else {
                    console.log('error uploding ...');
                    return "err";
                }
            })
            .then((responseData) => {
                console.log(responseData);
                if (responseData != "err") {
                    let picNameWOExt = picName.substring(0, picName.indexOf("."));
                    let imageNameWithGUID = responseData.substring(responseData.indexOf(picNameWOExt), responseData.indexOf(".jpg") + 4);
                    this.setState({
                        uplodedPicUri: { uri: this.uplodedPicPath + imageNameWithGUID },
                        finalPicUri: { uri: responseData }
                    });
                }
                else {
                    console.log('error uploding ...', this.state.finalPicUri);
                    alert('error uploding ...');
                }
            })
            .catch(err => {
                alert('err upload= ' + err);
            });

        console.log("final", this.state.finalPicUri);
        this.props.navigation.navigate('AddNote',
            {
                uri: this.state.finalPicUri.uri
            }
        );
    }

    render() {
        let { photoUri } = this.state;

        return (
            <KeyboardAvoidingView behavior="padding" style={{ alignSelf: 'center' }}>
                <View >
                    <View >
                        <Button
                            title="Choose From Gallery"
                            onPress={this.btnOpenGalery}
                        />
                    </View>
                    {photoUri &&
                        <Image
                            source={{ uri: photoUri }}
                            style={{ width: 250, height: 250 }} />
                    }
                </View>
                <Button
                    title="Save Picture"
                    onPress={this.btnUpload}
                />
            </KeyboardAvoidingView >
        );
    }
}
const stylesCP = StyleSheet.create({
    placeHolder: {
        flex: 1,
        width: 350,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
    },
    image: {
        flex: 1
    }
}); 