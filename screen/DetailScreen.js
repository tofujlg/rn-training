import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Wifi from '../component/wifi';
import Machine from '../component/machine'
import Bar from '../component/bar'
import Report from '../component/report'
import MachineDetailInfo from '../component/MachineDetailInfo';
import CheckWarrenty from '../component/CheckWarrenty';
import Unsync from '../component/unsync';
import Ask from '../component/ask';
import mockData from '../Mockdata/mockData';


const DetailScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Wifi />
        <Machine />
        <Bar />
        <MachineDetailInfo />
        <Report navigation={navigation} mockData={mockData} />
        <CheckWarrenty />
        <Unsync />
        <Ask />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
});


export default DetailScreen