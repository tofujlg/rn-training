import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './elements/Card'


const Report = ({ navigation }) => {
    return (
        <View >
            <TouchableOpacity onPress={
                () => navigation.navigate('Report')
            }>
                <Card title="レポート" />
            </TouchableOpacity>
        </View>
    )
}

export default Report