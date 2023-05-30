import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import ButtonBox from '../components/ButtonBox';

const EkranHome = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ButtonBox ikona={<MaterialCommunityIcons name='tooth-outline' size={65}/>} naslov='Usluge' onPress={()=>props.navigation.navigate('Usluge')}/>
        <ButtonBox ikona={<MaterialIcons name='description' size={65}/>} naslov='O nama'/>

      </View>
    </View>
  )
}

export default EkranHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flexDirection:'row'
  }
})