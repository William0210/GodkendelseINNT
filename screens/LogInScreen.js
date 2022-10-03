import { KeyboardAvoidingView, StyleSheet, TextInput, View, Button, Text, Alert } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { auth } from '../App'
import { useNavigation } from '@react-navigation/core'

const LogInScreen = () => {
    // Konstaterer state variables med useState
    // Kan bruges i flere forskellige funktioner
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()


    // Prædefineret create user funktion fra firebase
    const signUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            Alert.alert("Your account has been registered!")
            console.log('New User Registered:', user.email)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
    });       
 }

    // Prædefineret log in user funktion fra firebase
    const LogIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            navigation.navigate("Home")
            console.log('User Logged In:',user.email)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
    });
}

    // bruger navigate() til at flytte loggede brugere til Home Screen
    const loggedUser = auth.currentUser;
    if ( loggedUser) {
        navigation.navigate("Home")
    }
  return ( // Knapper og inputfelter til Log In & Sign Up
            // on
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
            <TextInput placeholder='E-Mail...' value={email} onChangeText={text =>setEmail(text)}></TextInput>
            <TextInput placeholder='Password...' value={password} onChangeText={text =>setPassword(text)} secureTextEntry></TextInput>
        </View>
        <View>
            <Button title="Log In" onPress={LogIn}></Button>
            <Button title="Sign Up" onPress={signUp}></Button>
        </View>
    </KeyboardAvoidingView>
  )
  
}

// Stylesheet
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

// export
export default LogInScreen