
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/auth/Splash';
import Signin from './src/screens/auth/Signin';
import SignUp from './src/screens/auth/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home/index.js'
import Favourites from './src/screens/app/Favourites/index.js'
import Profile from './src/screens/app/Profile/index.js'
import { colours } from './src/utilities/colours';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Image } from 'react-native';
import profileIcon from './src/assets/profileIcon.png'
import profileFocussed from './src/assets/profileFocussed.png'
import homeFocussedIcon from './src/assets/homeFocussed.png'
import markerIcon from './src/assets/marker.png'
import markerFocussed from './src/assets/markerFocussed.png'
import homeIcon from './src/assets/home.png'

const WEB_CLIENT_ID = '933749390205-h8mrvsk1h6mn533hd4hnq12tt90ovh9v.apps.googleusercontent.com'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused
          ? homeFocussedIcon
          : homeIcon;
      } else if (route.name === 'Profile') {
        iconName = focused ? profileFocussed : profileIcon;
      } else if (route.name === 'Favourites') {
        iconName = focused ? markerFocussed : markerIcon;
      } 

      // You can return any component that you like here!
      return <Image style={{width: 24, height: 24}} source={iconName} />;
    },
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {borderTopColor: colours.lightGrey}
    })}
    >

  <Tab.Screen name="Home" component={Home} />
  <Tab.Screen name="Favourites" component={Favourites} />
  <Tab.Screen name="Profile" component={Profile} />
</Tab.Navigator>
)


const MyTheme = {
  colors: {
    background: colours.white,
  },
};

const App = () => {
  const isSignedIn = true

 useEffect(() => {

 }, [])
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
{isSignedIn ? (
        <>
          <Stack.Screen name='Tabs' component={Tabs} options={{headerShown: false}}  />
        </>
):(
  <>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={SignUp} options={{headerShown: false}} />

  </>
)}
      </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
  );
}


export default App;
