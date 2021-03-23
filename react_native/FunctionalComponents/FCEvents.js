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
                style={[styleSheet.container]}
                >
                {props.events.map(i => (
                    <ListItem key={i.ID} bottomDivider>
                        <Avatar
                            source={{ uri: i.Image }}
                            size='large'
                            rounded={true} />
                        <ListItem.Content>
                            <ListItem.Title>{i.Name}</ListItem.Title>
                            <ListItem.Subtitle>{helpers.ReturnDate(i.Date) + '\n' + helpers.ReturnHour(i.Date)}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Content style={{ alignItems: 'flex-end' }}>
                            <MaterialCommunityIcons
                                name="clipboard-list-outline"
                                color='black'
                                size={26}
                                onPress={() => {
                                    props.setSingleEvent(i);
                                    props.toggleShow();
                                }}
                            />
                        </ListItem.Content>
                    </ListItem>
                ))}
            </ScrollView>
    )
}
