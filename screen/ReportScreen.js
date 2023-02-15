import { View, Text } from 'react-native'
import React from 'react'
import SelectMonth from '../component/elements/SelectMonth'
import MachineInfo from '../component/elements/MachineInfo'
import ReportInfo from '../component/elements/ReportInfo'

const ReportScreen = ({route}) => {
  const passingData = route.params.mockData; 
  return (
    <View>
      <SelectMonth/>
      <MachineInfo passingData={passingData}/>
      <ReportInfo/>
    </View>
  )
}

export default ReportScreen