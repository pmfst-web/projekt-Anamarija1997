import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EkranUsluge = () => {
    return (
        <View>
            <Text>EkranUsluge</Text>
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
    },
    buttonContainer: {
        flexDirection: 'row'
    }
})