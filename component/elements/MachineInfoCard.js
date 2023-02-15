import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'


const MachineInfoCard = ({passingData}) => {
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
            <FlatList
                data={passingData}
                numColumns={3}
                renderItem={({item}) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemData} >{item.value}</Text>
                    </View>
                )}
                />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    listContainer:{
        marginTop:30,
        justifyContent:'space-around'
    },
    itemContainer:{
       height:60,
       width: 140
    },
    itemTitle:{
        fontWeight: 'bold',
        fontSize: 14,
        color:'grey'
    },itemData:{
        fontWeight:'500'
    }
})



export default MachineInfoCard