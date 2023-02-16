import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Machine = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/LN-150.png')}
        style={styles.machineImage}
      />
      <View style={styles.machineBox}>
        <Text style={styles.machineName} >LN-150-LW00004</Text>
        <Text style={styles.machineSync}>機械同期</Text>
        <Text style={styles.syncDate}>2023/02/15 9:00</Text>
      </View>
      <TouchableOpacity style={styles.sync}>
        <Ionicons name='sync' size={25} color={'white'} style={styles.syncIcon}/>
        <Text style={styles.syncText}>同期</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Machine

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:10,
    borderRadius: 6,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  }, 
  machineImage:{
width: 40, height: 60 ,
position:'relative',
top:20,
left:30
  },
  machineBox:{
padding:20
  },
  machineName: {
    fontSize: 18,
    fontWeight: '800'
  }, machineSync: {
    color: 'grey',
    fontWeight: 'bold'
  }, syncDate: {
    fontWeight: '600'
  }, 
  sync: {
    backgroundColor: '#007dc5',
    padding:17,
    borderTopRightRadius:6,
    borderBottomRightRadius:6,
  },syncText:{
    color:'white',
    fontWeight: '400',
    paddingTop:8
  },syncIcon:{
    paddingTop:10
  }
})
