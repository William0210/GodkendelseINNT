import { KeyboardAvoidingView, StyleSheet, TextInput, View, Button, Text, Alert } from 'react-native'
import React from 'react'
import { auth } from '../App'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
    
    const navigation = useNavigation()

    // Prædefineret firebase sign out metode
    const signOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
    });
}

  return (
    <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
      <Button title="Sign Out" onPress={signOut}></Button>
    </View>
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
export default HomeScreen