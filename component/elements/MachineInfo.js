import { View, Text } from 'react-native'
import React from 'react'
import MachineInfoCard from './MachineInfoCard'

const MachineInfo = () => {
  return (
    <View>
      <Text>LN-150-LW00004</Text>
      {/* なんかリストかなんか使ってMapするべき */}
      <MachineInfoCard
        infoTitle="Test"
        infoData="Testdata"
      />
    </View>
  )
}

export default MachineInfo