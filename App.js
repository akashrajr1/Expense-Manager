import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene } from "react-native-router-flux";

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import PaytmScreen from './screens/PaytmScreen';

export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="welcome"
          component={WelcomeScreen}
          title = "Welcome Screen"
          initial
        />
        <Scene key="home"
          component={HomeScreen}
          title = "Home Screen"
        />
        <Scene key="paytm"
          component={PaytmScreen}
          title = "Paytm Screen"
        />
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
