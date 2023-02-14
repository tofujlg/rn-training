import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Machine = () => {
  return (
    <View style={styles.card}>
      <Text>Machine</Text>
    </View>
  )
}

export default Machine

const styles = StyleSheet.create({
    card: {
        padding: 20,
        paddingVertical:45,
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
    }
})
