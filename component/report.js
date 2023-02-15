import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './elements/Card'
import mockData from '../Mockdata/mockData'


const Report = ({ navigation }) => {
    return (
        <View >
            <TouchableOpacity onPress={
                () => navigation.navigate('Report',{mockData})
            }>
                <Card title="レポート" />
            </TouchableOpacity>
        </View>
    )
}

export default Report