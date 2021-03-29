import React, { useEffect, useState } from 'react'
import {  ScrollView, Modal } from 'react-native';
import { Avatar, ListItem, Text } from 'react-native-elements';
import styleSheet from '../Pages/PageStyle';
import helpers from '../helpers/helperFunctions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FCEvents(props) {

    return (
            <ScrollView
                horizontal={false}
                pagingEnabled={true}
                showsVerticalScrollIndicator={false}
                style={styleSheet.container}
                >
                {props.events.map(i => (
                    <ListItem style={{display:'flex',flex:1, justifyContent: 'flex-end' }} key={i.eventId} bottomDivider>
                         <ListItem.Content >
                            <MaterialCommunityIcons
                                name="clipboard-list-outline"
                                color='black'
                                size={30}
                                onPress={() => {
                                    props.setSingleEvent(i);
                                    props.toggleShow();
                                }}
                            />
                        </ListItem.Content>
                        <ListItem.Content style={{justifyContent:'flex-end'}}>
                            <ListItem.Title>{i.eventName}</ListItem.Title>
                            <ListItem.Subtitle>{helpers.ReturnDate(i.eventDate)}</ListItem.Subtitle>
                            <ListItem.Subtitle>{i.startTime}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Content>
                        <Avatar
                            source={{ uri: i.eventImgPath }}
                            size='large'
                            rounded={true} />
                        </ListItem.Content>
                    </ListItem>
                ))}
            </ScrollView>
    )
}
