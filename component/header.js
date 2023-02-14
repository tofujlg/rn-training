import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/menu.png')}
        style={{width:30, height:30}}
        />
      <Text style={styles.text}>グループ：Topcon1</Text>
      <Image
        source={require('../assets/topcon-icon.png')}
        style={{width:45, height:45}}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        paddingTop: 15,
        marginTop: 1,
        flexDirection: "row",
        justifyContent: "space-between" ,
        backgroundColor:"#007DC5",
        alignItems:"center"
    },
    text:{
        color: "white"
    }
})