import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Tipka = (prop) => {
  return (
    <TouchableOpacity onPress={prop.onPress} style={styles.tipka}>
        <Text>
            {prop.tekst}
        </Text>
    </TouchableOpacity>
  )
}

export default Tipka

const styles = StyleSheet.create({
    tipka:{
        borderWidth:1,
        borderRadius:15,
    }
})