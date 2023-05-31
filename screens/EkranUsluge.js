import { StyleSheet, Text, View, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import usluge from '../data/PopisUsluga'


const EkranUsluge = () => {
    const ispisUsluga = (i) => {
        return (
            <TouchableOpacity style={styles.uslugeStil}>
                <Text>
                    {i.item.ime}
                </Text>
                <Text>
                    {i.item.cijena}€
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <FlatList data={usluge} renderItem={ispisUsluga} contentContainerStyle={{alignItems:'center'}} style={styles.listContainer} />
            </View>
        </View>
    )
}



export default EkranUsluge

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    uslugeStil: {
        flexDirection:'row',
        borderWidth: 1,
        borderRadius: 15,
        marginVertical:5,
        paddingHorizontal:10,
        width:'80%',
        justifyContent:'space-around'
    },
    listContainer:{
        width:300,
        borderWidth:1,
    }
})