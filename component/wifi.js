import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import SwitchSelector from 'react-native-switch-selector'

const options = [
  { label: "Wifi", value: "Wifi" },
  { label: "Bluetooth", value: "Bluetooth" }
];

const Wifi = () => {
  return (
    <View style={styles.switchSelector} >
      <SwitchSelector
        options={options}
        initial={0}
        buttonColor={'#007DC5'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  switchSelector: {
    padding:20
  },
});



export default Wifi