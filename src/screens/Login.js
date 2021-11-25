import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Touchable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default function Login ({navigation}){
  
  const [username, onChangeUsername] = React.useState("");
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);


  const handleProfile = () => {
    console.log("handleProfile {"+ username+","+hidePass+"}");

    navigation.navigate('Profile', {name: username})

}

  const handleRegister = () => {
    
    navigation.navigate('Register');
    
  }

  return (
    <View style={styles.container}>
        
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://i.ibb.co/spSrDRR/IFUNNY-removebg-preview.png'}}
        />

      <View style={styles.inputAreaLogin}>
      <TextInput 
      style={styles.login}
      placeholder="Insira o seu login"
      placeholderTextColor='#fff'
      onChangeText={onChangeUsername} 
      value={username}/>
      </View>


      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          placeholderTextColor='#fff'
          value={input}
          onChangeText={ (texto) => setInput(texto) }
          secureTextEntry={hidePass}
          />
          <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass) }>
            { hidePass ?
               <Ionicons name="eye" color="#fff" size={25}/>
            :
               <Ionicons name="eye-off" color="#fff" size={25}/>
            }
          </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={styles.buttom}>
            <Text style={styles.buttomText} onPress={handleProfile}>Acessar</Text>
          </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={styles.buttomRegister}>
            <Text style={styles.buttomTextRegister} onPress={handleRegister}>Registrar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#00DAFF',
  },
  inputArea: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#036D7F',
    borderRadius: 5,
    heigh: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    width: '85%',
    height: 50,
    color: '#fff',
    padding: 8,
    fontSize: 18
  },
  inputAreaLogin: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#036D7F',
    borderRadius: 5,
    heigh: 50,
    alignItems: 'center',
    marginTop: -40,
  },
  login: {
    width: '100%',
    height: 50,
    color: '#fff',
    padding: 8,
    fontSize: 18
  },
  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttom: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#023B44',
    borderRadius: 10,
  },
  buttomText: {
    fontSize: 15,
    color: '#fff',
  },
  buttomRegister: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#00CB57',
    borderRadius: 10,
    
  },
  buttomTextRegister: {
    fontSize: 15,
    color: '#fff',
  },
  tinyLogo: {
    width: '100%',
    height: 300,
  },
});


