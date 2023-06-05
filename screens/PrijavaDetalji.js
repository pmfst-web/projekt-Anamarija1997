import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'

const PrijavaDetalji = (prop) => {
    const [listaUsluga, setListaUsluga] = useState(prop.route.params.lstUsluga);
    const [ime, setIme] = useState(prop.route.params.ime);
    const [datum, setDatum] = useState(prop.route.params.datum);

    useEffect(() => {
      console.log(listaUsluga);
    }, [])
    

    return (
        <View style={styles.container}>
            <View style={styles.contentStil}>
                <View>
                    <Text>Ime: {ime} {'\n'}
                        Datum: {datum} {'\n'}
                    </Text>
                </View>
                <View>
                    <ScrollView>
                        {listaUsluga.map((it) => (
                            <Text>
                                {it.ime}
                            </Text>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default PrijavaDetalji

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50
    },
    contentStil: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 10,
        elevation: 20,
        backgroundColor: 'white',
        width: '80%'
    },
})