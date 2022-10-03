import { KeyboardAvoidingView, StyleSheet, TextInput, View, Button, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import * as firebase from "firebase";

// Views
import LogInScreen from './screens/LogInScreen';
import HomeScreen from './screens/HomeScreen';

// Stack Navigator til videre arbejde
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Firebase konfigurationer
const firebaseConfig = {
  apiKey: "AIzaSyAwAIZLFLHYC4LkKK5DcD0vLYPCm_Gcemc",
  authDomain: "godkendelseinnt.firebaseapp.com",
  projectId: "godkendelseinnt",
  storageBucket: "godkendelseinnt.appspot.com",
  messagingSenderId: "70725063277",
  appId: "1:70725063277:web:66f2389fbcd0bb2338a564"
};

// Initiering af firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

// Export af firebase initiering
export { auth };