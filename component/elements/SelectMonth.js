import { View, Text,StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { constants } from '../../Constants/Constants'


const SelectMonth = () => {
  return (
    <View style={styles.header}>
      <Ionicons name='chevron-back' size={25} color='black'/>
      <View style={styles.headerDateView}>
      <Ionicons name='md-arrow-back-circle' size={30} color='#007DC5'/>
      <Text style={styles.headerDate}>2023年2月</Text>
      <Ionicons name='md-arrow-forward-circle' size={30} color='#007DC5'/>
      </View>
      <View style={styles.headerTodayButton}>
      <TouchableOpacity>
        <Text style={styles.headerTodaybuttonText}>今日</Text>
      </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
 header:{
  backgroundColor: 'white',
  padding:20,
  flexDirection:'row',
  justifyContent:'space-between'
 },
 headerDateView:{
  flexDirection:'row'
 }
 ,headerDate:{
  fontWeight:'bold',
  fontSize:15,
  marginTop:5,
  marginHorizontal:10
 },headerTodayButton:{
  backgroundColor: '#007DC5',
  padding:7,
  borderRadius: 7
 },headerTodaybuttonText:{
  color:'white',
  fontWeight:'bold'
 }
})

export default SelectMonth