import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './elements/Card'
import mockData from '../Mockdata/mockData'


const Report = ({ navigation }) => {
    return (
            <TouchableOpacity
            testID='myButton'
            onPress={
                () => navigation.navigate('Report',{mockData})
            }>
                <Card title="γ¬γγΌγ" icon='report'/>
            </TouchableOpacity>
    )
}

export default Report