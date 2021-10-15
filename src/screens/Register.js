import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Touchable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Redirect } from 'react-router';


export default function Register ({navigation}){

    const [nam, names] = React.useState("");
    const [email, emails] = React.useState("");
    const [password, passwords] = useState('');

const handleProfile = () => {
        console.log("handleProfile {"+ nam+","+email+","+password+"}");
    
        navigation.navigate('Profile', {name: nam, email: emails})
    
    }

        return (
            <View style={styles.container}>
                <TextInput 
                placeholder='Nome' 
                style={styles.input} 
                value={nam}
                onChangeText={names}/>
                <TextInput 
                placeholder='Email' 
                style={styles.input}
                keyboardType='email-address' 
                value={email}
                onChangeText={emails}/>
                <TextInput 
                placeholder='Senha' 
                style={styles.input}
                secureTextEntry={true} 
                value={password}
                onChangeText={passwords}/>
                <TouchableOpacity 
                onPress={() => { }} 
                style={styles.buttom}>
                <Text 
                style={styles.buttomText} 
                onPress={handleProfile}>Salvar
                </Text>
                </TouchableOpacity>
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#023B44'
    },
    buttom: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#4286f4',
        borderRadius: 10,
    },
    buttomText: {
        fontSize: 20,
        color: '#fff',
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#036D7F',
        height: 40,
        paddingLeft: 15,
        borderRadius: 15,
        fontSize: 20,
    }
});
