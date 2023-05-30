import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const buttonBox = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.ikona}
      <Text>{props.naslov}</Text>
    </TouchableOpacity>
  )
}

export default buttonBox

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})