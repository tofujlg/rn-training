import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './elements/Card'
import mockData from '../Mockdata/mockData'


const Report = ({ navigation }) => {
    return (
            <TouchableOpacity onPress={
                () => navigation.navigate('Report',{mockData})
            }>
                <Card title="レポート" icon='report'/>
            </TouchableOpacity>
    )
}

export default Report