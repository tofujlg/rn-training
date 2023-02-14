import { View, Text } from 'react-native'
import React from 'react'
import SelectMonth from '../component/elements/SelectMonth'
import MachineInfo from '../component/elements/MachineInfo'
import ReportInfo from '../component/elements/ReportInfo'
import Header from '../component/header'

const ReportScreen = () => {
  return (
    <View>
      <Header/>
      <SelectMonth/>
      <MachineInfo/>
      <ReportInfo/>
    </View>
  )
}

export default ReportScreen