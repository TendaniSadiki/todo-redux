
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/Login"
import HomeScreen from "./screens/Home"
import SignUpScreen from "./screens/SignUp"
import firebase from 'firebase/app';
import "firebase/auth";

const Stack = createNativeStackNavigator();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyDIP7BBiSwDKG-UV1H9s95lQmAOrwsvWTE",
  authDomain: "todo-list-native-redux.firebaseapp.com",
  databaseURL: "https://todo-list-native-redux-default-rtdb.firebaseio.com",
  projectId: "todo-list-native-redux",
  storageBucket: "todo-list-native-redux.appspot.com",
  messagingSenderId: "600774242811",
  appId: "1:600774242811:web:1977b596a742fc85f31b5e"
  };

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });



  return (
    <NavigationContainer>
      {isLoggedIn ? <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator> :
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>}
    </NavigationContainer>
  );
}

export default App;
