import { StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity, Dimensions, Modal, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

import { TextInput } from '@react-native-material/core';

import usluge from '../data/PopisUsluga'
import listaPrijava from '../data/ListaPrijava';

import Tipka from '../components/Tipka'
import UslugeButtonBox from '../components/UslugeButtonBox';

const EkranUsluge = (prop) => {
  //sprema odabrane servise
  const [listOdabirUsluga, setListOdabirUsluga] = useState([]);
  //vidljivost input modala
  const [visibility, setVisibility] = useState(false);
  //vidljivost pop-up modala
  const [popUpVisibility, setPopUpVisibility] = useState(false);
  //input field
  const [imeKorisnika, setImeKorisnika] = useState('');


  function randomDate() {
    return `${Math.floor(Math.random() * (30 - 1 + 1)) + 1}/ ${Math.floor(Math.random() * (12 - 1 + 1)) + 1}/ 2024`;
  }

  const podnesiPrijavu = () => {
    if (!imeKorisnika) {
      Alert.alert('Morate unijeti ime !');
      return
    }

    const o = {
      key: listaPrijava.length + 1,
      ime: imeKorisnika,
      datum: randomDate(),
      us: listOdabirUsluga
    }
    listaPrijava.push(o);
    setVisibility(false);
    setImeKorisnika('');
    setListOdabirUsluga([]);
    prop.navigation.pop();
  }

  const UnesiIme = (t) => {
    setImeKorisnika(t);
  }

  const modalOdustani = () => {
    setImeKorisnika('');
    setVisibility(false);
  }

  const podnesiHandler = () => {
    if (listOdabirUsluga.length === 0) {
      setPopUpVisibility(true); 0
      return
    }
    setVisibility(true);
  }

  return (
    <View style={styles.container}>
      <Modal
        visible={popUpVisibility}
        animationType='slide'
        transparent={true}
      >
        <View style={styles.popUpModalStil}>
          <View style={styles.modalContentStil}>
            <Text>Morate odabrati bar jednu uslugu !</Text>

            <View style={styles.tipkaOKStil}>
              <Tipka tekst='OK' onPress={() => setPopUpVisibility(false)} />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={visibility}
        animationType='fade'
        transparent={true}>
        <View style={styles.modalStil}>
          <View style={styles.modalInputContentStil}>
            <View style={{ alignItems: 'center' }}>
              <TextInput variant='outlined' label='Unesite ime..' value={imeKorisnika} autoFocus color='#928DD4' onChangeText={(t) => UnesiIme(t)} style={styles.inputImeStil} />
            </View>

            <View style={styles.buttonContainerModal}>
              <Tipka tekst='Unesi' onPress={podnesiPrijavu} />
              <Tipka tekst='Odustani' onPress={modalOdustani} />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.listContainer}>
        {usluge.map((it) => {
          return <UslugeButtonBox title = {it.ime} cijena = {it.cijena} listaDodanihUsluga = {listOdabirUsluga} setListDodanihUsluga = {setListOdabirUsluga} />
        })}
      </View>

      <View>
        <Tipka tekst='Podnesi' onPress={podnesiHandler} />
      </View>

    </View>
  )
}

export default EkranUsluge

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: StatusBar.currentHeight + 20,
    backgroundColor: 'white'
  },
  uslugeStil: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 5,
    paddingHorizontal: 10,
    width: 250,
  },
  listContainer: {
    width: Dimensions.get('screen').width - 50,
    flexGrow: 0,
    paddingVertical: 20,
    marginBottom: 20
  },
  inputImeStil: {
    width: '80%',
    marginBottom: 20,
  },
  modalStil: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  popUpModalStil: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 15
  },
  modalContentStil: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 20,
    backgroundColor: 'white',
    width: '80%'
  },
  modalInputContentStil: {
    //alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 20,
    backgroundColor: 'white',
    width: '80%'
  },
  buttonContainerModal: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  uslugaOdabrana: {
    backgroundColor: 'cyan'
  },
  tipkaOKStil: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 35,
    paddingTop: 15,
  }
})