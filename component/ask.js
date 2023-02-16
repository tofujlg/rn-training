import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

const Ask = () => {
  return (
        <View style={styles.card}>
          <View style={styles.div}>
          </View>
          <View >
      <Text style={styles.ask}>チャットで質問</Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        position:'relative',
        left:290,
        padding:10,
        marginHorizontal:10,
        marginVertical:5,
        borderRadius: 6,

        top:10,
        width:100,
        backgroundColor: "#007dc5",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        flexDirection:'row'
    },div:{
    },ask:{
      textAlign:'center'
      ,color:'white',
      fontWeight:'600'
   }
})

export default Ask