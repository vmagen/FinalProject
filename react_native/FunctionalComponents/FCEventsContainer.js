import React , {useState, useEffect} from 'react'
import { View } from 'react-native'
import {Text} from 'react-native-elements';
import FCSearch from './FCSearch';
import headers from '../helpers/messages.json';
import styleSheet from '../Pages/PageStyle';
import FCHeader from './FCHeader';
import FCEvents from './FCEvents';
import FCEvent from './FCEvent';
import helpers from '../helpers/helperFunctions';

export default function FCEventsContainer() {
    const [showSingle, setShowSingle] = useState(true);
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        getAllEvents();
    }, []);

    const[event, setEvent]=useState({
        id:0,
        name:'',
        description:'',
        date:'',
        picture:'',
        price:'',
        ticketsLeft:''
    });

    const toggleShow=()=>{
       setShowSingle(!showSingle);
    }

    const SetSingleEvent=(event)=>{
        setEvent({
            id:event.eventId,
            name:event.eventName,
            date:event.eventDate,
            time:event.startTime,
            picture:event.eventImgPath,
            description:event.content,
            price:event.price,
            ticketsLeft:event.participantsAmount
        })

    }
    function getAllEvents() {
        fetch(helpers.getApi() + '/Event',
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
                    setEvents(result);
                },
                (error) => {
                    console.log("err post=", error);
                });
    }
    return (
        <View style={styleSheet.container}>
            <FCHeader />
            <Text h2 style={styleSheet.h4Text}>{headers.upcomingEvents}</Text>
            <FCSearch placeholder={headers.searchEvents} />
            {showSingle ? 
            <FCEvents toggleShow={toggleShow} events={events} setSingleEvent={SetSingleEvent}/>
                :
            <FCEvent toggleShow={toggleShow} event={event} />}
        </View>
    )
}
