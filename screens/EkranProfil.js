import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import React, { useState } from 'react'

import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import { TextInput } from '@react-native-material/core'
import Tipka from '../components/Tipka'

import {useSelector,useDispatch} from 'react-redux'
import { signUpHandler } from '../store/actions/Dental'

import { changeUsernameHello } from '../data/LogiranKorisnik'

const EkranProfil = () => {
  const nizKorisnickihRacuna=useSelector(state=>state.dental.korisnickiRacuni);

  const [ekranContent, setEkranContent] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [korisnickoIme, setKorisnickoIme] = useState('');
  const [lozinka, setLozinka] = useState('');

  const dispatch=useDispatch();

  const signUpAction=()=>{
    if(!korisnickoIme || !lozinka){
      Alert.alert('Polja ne smiju biti prazna! ');
      return
    }
    dispatch(signUpHandler(korisnickoIme,lozinka));
    setEkranContent(false);
    setLoggedIn(true);
    setUser(korisnickoIme);
    changeUsernameHello(korisnickoIme);
    setKorisnickoIme('');
    setLozinka('');
  }

  const logOutAkcija = () => {

    setLoggedIn(false);

    changeUsernameHello('');

}

  const logInAction=()=>{
    if(!korisnickoIme || !lozinka){
      Alert.alert('Polja ne smiju biti prazna!');
      return
    }
    const answer=nizKorisnickihRacuna.some(el=>el.username === korisnickoIme && el.password === lozinka)
  
    if(answer){
      setEkranContent(false);
      setLoggedIn(true);
      setUser(korisnickoIme);
      changeUsernameHello(korisnickoIme);
      setKorisnickoIme('');
      setLozinka('');
      return
    }

    Alert.alert('Korisnik ne postoji!');
    setKorisnickoIme('');
    setLozinka('');
  }

  return (
    <View style={styles.container}>
      {ekranContent ?
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.logInContainer}>
          <View style={styles.useIconCircle}>
            <AntDesign name='user' color={'#211E4F'} size={140} />
          </View>
          <View style={styles.profilInputContainer}>
            <TextInput variant='outlined' placeholder='Unesite ime...' value={korisnickoIme} color='#928DD4' onChangeText={(t) => setKorisnickoIme(t)} style={styles.inputStil} />
            <TextInput variant='outlined' keyboardType='numeric' secureTextEntry={true} value={lozinka} color='#928DD4' onChangeText={(t) => setLozinka(t)} style={styles.inputStil} />
          </View>
          <View style={styles.footerContainer}>
            <Tipka tekst='Log In' onPress={logInAction} />
            <TouchableOpacity style={{marginTop:15}} onPress={()=>setEkranContent(false)}>
              <Text style={{color:'#928DD4'}}>Nemaš račun? Klikni ovdje</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback> : loggedIn ?
      <View style={styles.logInContainer}>
        <FontAwesome5 name='cat' color={'#211E4F'} size={140} />
        <View style={styles.profilInputContainer}>
          <Text style={{fontSize:24,fontWeight:'100'}}>Hello, {user} </Text>
        </View>
        <View style={{...styles.profilInputContainer,marginTop:50}}>
          <Tipka tekst='Log out' onPress={logOutAkcija} />
        </View>
      </View>
      :
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.logInContainer}>
          <View style={styles.useIconCircle}>
            <AntDesign name='adduser' color={'#211E4F'} size={140} />
          </View>
          <View style={styles.profilInputContainer}>
            <TextInput variant='outlined' placeholder='Unesite ime...' value={korisnickoIme} color='#928DD4' onChangeText={(t) => setKorisnickoIme(t)} style={styles.inputStil} />
            <TextInput variant='outlined' keyboardType='numeric' secureTextEntry={true} value={lozinka} color='#928DD4' onChangeText={(t) => setLozinka(t)} style={styles.inputStil} />
          </View>
          <View style={styles.footerContainer}>
            <Tipka tekst='Sign up' onPress={signUpAction} />
            <TouchableOpacity style={{marginTop:15}} onPress={()=>setEkranContent(true)}>
              <Text style={{color:'#928DD4'}}>Nazad na prijavu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      }
    </View>
  )
}

export default EkranProfil

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logInContainer:{
    alignItems:'center',
    borderWidth:1,
    borderColor:'#928DD4',
    borderRadius:25,
    borderTopLeftRadius:5,
    borderBottomRightRadius:5,
    width:'80%',
    height:'90%',
    elevation:5,
    shadowColor:'#928DD4',
    paddingTop:100
  },
  useIconCircle:{
    borderWidth:4,
    borderColor:'#211E4F',
    borderRadius:100
  },
  inputStil:{
    width:'80%',
    borderColor:'#211E4F'
  },
  profilInputContainer:{
    alignItems:'center',
    width:'80%',
    marginTop:30,
    marginBottom:10
  },
  footerContainer:{
    justifyContent:'space-between',
    alignItems:'center'
  }
})