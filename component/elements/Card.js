import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { constants } from '../../Constants/Constants'

const Card = ({title,icon}) => {
    
    return (
        <View style={styles.card}>
           <View style={styles.cardIcon}>
           {icon==='box' && <Feather size={30} color={constants.primaryColor} name='box'/> }
           {icon==='report' && <Ionicons size={30} color={constants.primaryColor} name='document-text'/>}
           {icon==='ribbon' && <Ionicons size={30} color={constants.primaryColor} name='ribbon'/>}
           <Text style={styles.cardTitle}>{title}</Text>
            </View>
          <Ionicons name='chevron-forward' size={20} color='grey'/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 18,
        marginHorizontal:10,
        marginVertical:5,
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
        flexDirection:'row',
        justifyContent:'space-between'
    }  ,
cardIcon:{
flexDirection:'row',
 },cardTitle:{
    position:'relative',
    top:5,
    left:7,
    fontWeight:'bold'
 }
})

export default Card