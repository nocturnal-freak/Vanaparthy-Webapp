import React from 'react';
import { StyleSheet, Text, View, ImageBackground ,TextInput,Image,Button,TouchableOpacity,Linking,KeyboardAvoidingView} from 'react-native';
//import { StyleSheet, Text, View } from 'react-native';
// import bounce from './Assets/speed.gif';
import { Icon } from 'react-native-elements'

import backgroundPic from './Assets/Images/Background.jpg';
import emailIcon from './Assets/Images/Email-icon.png';
import lock from './Assets/Images/lock.png';

import Expo from 'expo';
import quicksandBold from './Assets/Fonts/Quicksand/Quicksand-Bold.ttf';
import quicksandRegular from './Assets/Fonts/Quicksand/Quicksand-Regular.ttf';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import HomeScreen from "./Screens/Login"
import ProfileScreen from "./Screens/Profile"
import {
  createStackNavigator,
} from 'react-navigation';

const Navigation = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default class  App extends React.Component {
  render () {
    return <Navigation />
   }

}
