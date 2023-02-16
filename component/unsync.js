import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Unsync = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>機械の接続解除</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    card: {
        padding: 18,
        marginHorizontal:10,
        marginVertical:5,
        borderRadius: 6,
        backgroundColor: "orange",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },cardTitle:{
      color:'white',
      fontWeight:'bold',
      textAlign:'center'
    }
})

export default Unsync