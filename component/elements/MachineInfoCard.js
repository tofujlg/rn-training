import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const mockData = [
    { title: '同期', value: '2022/11/08' },
    { title: 'OAD', value: '2022/12/07' },
    { title: 'FW更新', value: '2022/10/08' },
    { title: '当月稼働日数', value: '8日' },
    { title: '当月稼働時間', value: '25時間5分' },
    { title: '累計稼働時間', value: '225時間5分' }
]

const MachineInfoCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
            <FlatList
                data={mockData}
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