import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import MachineInfoCard from './MachineInfoCard'

const MachineInfo = ({passingData}) => {
  return (
    <View style={styles.machineInfo}>
      <Text style={styles.machineTitle}>LN-150-LW00004</Text>
      <MachineInfoCard
      passingData={passingData}
      />
    </View>
  )
}

const styles = StyleSheet.create({
 machineInfo:{
  backgroundColor: 'white',
  padding:20
 },
 machineTitle:{
  color:'#007DC5',
  fontWeight:'bold',
  fontSize:17
 }
})


export default MachineInfo