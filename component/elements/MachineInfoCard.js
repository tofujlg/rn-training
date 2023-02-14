import { View, Text } from 'react-native'
import React from 'react'

const MachineInfoCard = ({ infoTitle, infoData }) => {
    return (
        <View>
            <View>
                <Text>{infoTitle}</Text>
                <Text>{infoData}</Text>
            </View>
        </View>
    )
}

export default MachineInfoCard