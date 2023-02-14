import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

const Ask = () => {
  return (
        <View style={styles.card}>
      <Text>チャットで質問</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        marginHorizontal:10,
        marginVertical:5,
        borderRadius: 6,
        backgroundColor: "blue",
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

export default Ask