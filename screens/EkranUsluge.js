import { StyleSheet, Text, View, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import React,{useState} from 'react'
import usluge from '../data/PopisUsluga'
import listaPrijava from '../data/ListaPrijava'
import Tipka from '../components/Tipka'


const EkranUsluge = () => {
    const [listOdabirUsluga, setListOdabirUsluga] = useState([]);
    const ispisUsluga = (i) => {
        return (
            <TouchableOpacity style={styles.uslugeStil} onPress={()=>dodajPrijavu(i.item.ime,i.item.cijena)}>
                <View style={{flex:1, alignItems:'flex-start'}}>
                    <Text>
                        {i.item.ime}
                    </Text>
                </View>
                <View style={{flex:1, alignItems:'flex-end'}}>
                    <Text>
                        {i.item.cijena}€
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    const dodajPrijavu=(ime,cijena)=>{
        const o={
            id:listaPrijava.length+1,
            datum:randomDate(new Date(2023,0,1),new Date()),
            ime:ime,
            cijena:cijena,
        }
        setListOdabirUsluga(e=>[...listOdabirUsluga,o]);
    }
    const podnesiPrijavu=()=>{
        listaPrijava.push(listOdabirUsluga)

    }
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <FlatList data={usluge} renderItem={ispisUsluga} contentContainerStyle={{alignItems:'center'}} style={styles.listContainer} />
            </View>
            <View>
                <Tipka tekst='Podnesi' onPress={podnesiPrijavu}/>
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
        flexGrow:0,
        paddingVertical:20,
        marginBottom:20,
    }
})