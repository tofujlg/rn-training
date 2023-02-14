import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Bar = () => {
  return (
    <View style={styles.card}>
        <View style={styles.bar}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        paddingVertical:35,
        margin: 10,
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
    bar:{
        ///backgroundColor:"blue",
        borderWidth:1,
        borderRadius:6,
        borderColor:"blue",
        padding:5,
        marginHorizontal:10,
    }
})



export default Bar