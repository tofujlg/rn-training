import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({title}) => {
    return (
        <View style={styles.card}>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
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
    }
})

export default Card