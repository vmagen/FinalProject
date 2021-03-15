import React from 'react'
import { View, ScrollView } from 'react-native';
import { Text, Divider, Icon } from 'react-native-elements';
import FCHeader from '../FunctionalComponents/FCHeader';
import FCSearch from '../FunctionalComponents/FCSearch';
import headers from '../helpers/messages.json';
import styleSheet from '../Pages/PageStyle';
import FCDateTimePicker from './FCDateTimePicker';
import { DataTable } from 'react-native-paper';

export default function FCEvents() {
    const myEvents = [
        { id: 1, name: 'event1', description: 'event description1', date: '16/3/2021' },
        { id: 2, name: 'event2', description: 'event description1', date: '16/4/2021' },
        { id: 3, name: 'event3', description: 'event description1', date: '16/5/2021' },
        { id: 4, name: 'event4', description: 'event description1', date: '16/6/2021' },
        { id: 5, name: 'event5', description: 'event description1', date: '16/4/2021' },
        { id: 6, name: 'event6', description: 'event description1', date: '16/5/2021' },
        { id: 7, name: 'event7', description: 'event description1', date: '16/3/2021' },
        { id: 8, name: 'event8', description: 'event description1', date: '16/7/2021' },
        { id: 9, name: 'event9', description: 'event description1', date: '16/8/2021' },
    ]

    return (
        <ScrollView style={styleSheet.container}>
            <View>
                <FCHeader />
                <Text h2 style={styleSheet.h4Text}>{headers.upcomingEvents}</Text>
                <FCSearch placeholder={headers.searchEvents} />
                <Divider />
                <FCDateTimePicker />
                <View style={[styleSheet.container, { direction: 'rtl' }]}>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title >שם</DataTable.Title>
                            <DataTable.Title >תאור</DataTable.Title>
                            <DataTable.Title >תאריך</DataTable.Title>
                            <DataTable.Title >פרטים</DataTable.Title>
                        </DataTable.Header>
                        {myEvents.map((i) => {
                            return (
                                <DataTable.Row style={{ padding: 10 }}>
                                    <DataTable.Cell>{i.name}</DataTable.Cell>
                                    <DataTable.Cell>{i.description}</DataTable.Cell>
                                    <DataTable.Cell >{i.date}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Icon
                                            name='ios-clipboard-outline'
                                            type='ionicon' />
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )
                        })}
                    </DataTable>
                </View>
            </View>
        </ScrollView>
    )
}
