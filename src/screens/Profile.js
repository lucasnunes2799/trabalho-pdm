import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

const Profile = ({navigation, route}) => {

        const {name} = route.params;
        console.log(route);

        return(
            <View style={styles.container}>
                <Text style={styles.txt1}>Seja bem-vindo</Text>
                <Text style={styles.txt}> Perfil do usuario: {name} </Text>
            </View>
        )

   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        backgroundColor: '#00DAFF',
        },
        txt: {
            fontSize: 30,
            color: '#333',
            width: '100%',
            fontStyle: 'italic',
            fontFamily: 'Montserrat',
            marginTop: 40,
          },
          txt1: {
            fontSize: 35,
            color: '#333',
            fontFamily: 'Montserrat',
            textAlign: 'center'
          },
});


export default Profile;