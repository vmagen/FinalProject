import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native';
import { ScrollView } from 'react-native';
import { Avatar, ListItem, Text } from 'react-native-elements';
import helpers from '../helpers/helperFunctions';
import styleSheet from '../Pages/PageStyle';
import headers from '../helpers/messages.json';

export default function FCUserComments(props) {
    const [comments, setComments] = useState([]);
    const [loaded, setisLoaded] = useState(false);

    useEffect(() => {
        getComments();
        return () => {
            setComments([]);
        }
    }, [])

    //https://proj.ruppin.ac.il/bgroup15/prod/api/WineComment/wineId?Id=5
    const getComments = () => {
        fetch(helpers.getApi() + 'WineComment/wineId?Id=' + props.wineId,
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
                    setComments(result);
                })
            .then(
                () => { setisLoaded(true) }
                ,
                (error) => {
                    console.log("err post=", error);
                });
    }

    if (loaded && comments.length > 0) {
        return (
                <ScrollView
                    horizontal={false}
                    pagingEnabled={true}
                    showsVerticalScrollIndicator={false}
                    style={styleSheet.container}
                >
                    {comments.map(i => (
                        <ListItem
                            key={i.id}
                            bottomDivider
                            style={{display:'flex',flex:1 }}
                        >
                            <ListItem.Content style={{flex:0.5, marginRight:50}}>
                                <ListItem.Subtitle style={{ textAlign: 'right' }}>{helpers.ReturnDate(i.date)}</ListItem.Subtitle>
                                <ListItem.Title style={{ textAlign: 'right' }}>{i.text}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Content style={{flex:0.5}}>
                            <Avatar
                                    source={{ uri: i.UserPitcure }}
                                    size='medium'
                                    rounded={true}
                                    containerStyle={[styleSheet.avatar, styleSheet.avatarReg]} />
                            </ListItem.Content>
                        </ListItem>
                    ))}
                </ScrollView>
        )
    }
    else if (loaded && comments.length == 0) {
        return (
            <View>
                <Text style={{ padding: 20, textAlign: 'right' }}>{headers.noComments}
                </Text>
            </View>
        )
    }
    else if (!loaded) {
        return (
            <ActivityIndicator size='small' color='#691A1A' />
        )
    }
}
