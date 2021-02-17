import React, { useState, useEffect, } from 'react';
import { View, Image, Text, ActivityIndicator, ScrollView } from 'react-native';
import styleSheet from '../Pages/PageStyle'
import helpers  from '../helpers/helperFunctions';

function FCEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getEvents();
    }, []);

    function getEvents() {
        fetch(helpers.getApi() + '/Event',
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8',
                })
            })
            .then(res => {
                <ActivityIndicator size="large" />
                return res.json();
            })
            .then(
                (result) => {
                    setEvents(result);
                },
                (error) => {
                    console.log("err post=", error);
                });
    }

    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
            style={styleSheet.scrollView}>
            {events.map(item => (
                <View style={styleSheet.rowEvents} key={item.ID}>
                    <Image
                        source={{ uri: item.Image }}
                        style={styleSheet.event} />
                    <View style={{ alignItems: 'center' }}>
                        <Text>{item.Name}</Text>
                        <Text>{helpers.ReturnDate(item.Date)}</Text>
                        <Text>{helpers.ReturnHour(item.Date)}</Text>
                    </View>
                </View>

            ))}
        </ScrollView>
    )
}
export default FCEvents;