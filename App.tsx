
import React, { useEffect } from 'react';
import {
  SafeAreaView
} from 'react-native';
import Signup from './src/screens/auth/SignUp';
import Signin from './src/screens/auth/Signin';

const WEB_CLIENT_ID = '933749390205-h8mrvsk1h6mn533hd4hnq12tt90ovh9v.apps.googleusercontent.com'

const App = () => {
 useEffect(() => {

 }, [])
  return (
    <SafeAreaView >
      <Signin />
    </SafeAreaView>
  );
}


export default App;
