import React from 'react';
import { StyleSheet, Text, View, ImageBackground ,TextInput,Image,Button,TouchableOpacity,Linking,KeyboardAvoidingView} from 'react-native';
//import { StyleSheet, Text, View } from 'react-native';
// import bounce from './Assets/speed.gif';
import backgroundPic from '../../Assets/Images/Background.jpg';
import emailIcon from '../../Assets/Images/Email-icon.png';
import lock from '../../Assets/Images/lock.png';
import Expo from 'expo';
import quicksandBold from '../../Assets/Fonts/Quicksand/Quicksand-Bold.ttf';
import quicksandRegular from '../../Assets/Fonts/Quicksand/Quicksand-Regular.ttf';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props){
    super(props);
    this.state={email:"",password:"",isReady:false}
  }
  async componentWillMount() {
       await Expo.Font.loadAsync({
      'quicksandBold': quicksandBold,
      'quicksandRegular': quicksandRegular
      });
       this.setState({ isReady: true});
  }
  render() {
    if(!this.state.isReady){
      return <Expo.AppLoading />;

    }
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

        <ImageBackground source={backgroundPic}  style={styles.backgroundImage}>


        <Text style={styles.red}>Anaemia baneAk</Text>
        <Text style={{fontSize:12,textAlign:'center',fontFamily:'quicksandBold',color:'#ffffff',marginBottom:50}}>Welcome! Please login to your account.</Text>


        <View style={styles.SectionStyle}>
          <Image source={emailIcon} style={styles.icon}/>
          <TextInput onChangeText={(email) => this.setState({email})}
          value={this.state.email} style={styles.textInput} placeholder="Email" underlineColorAndroid='transparent'/>
        </View>

        <View style={styles.SectionStyle}>
          <Image source={lock} style={styles.icon}/>
          <TextInput secureTextEntry={true} onChangeText={(password) => this.setState({password})}
          value={this.state.password} style={styles.textInput} placeholder="Password" underlineColorAndroid='transparent'/>
        </View>


        <TouchableOpacity style={styles.button} onPress={() => navigate('Profile')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
          <Text style={{color: '#669999',textAlign:'center',textAlignVertical:'center',marginTop:20,fontFamily:'quicksandBold',marginRight:45,marginLeft:75}}>
                Need Help?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
          <Text style={{color: '#669999',textAlign:'center',textAlignVertical:'center',marginTop:20,fontFamily:'quicksandBold'}}>
                Register Here?
          </Text>
        </TouchableOpacity>
        </View>

        </ImageBackground>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
     width:370,
     height:600,
   },
   red:{
     color:'#669999',
     fontSize: 40,
     fontFamily:'quicksandBold',
     textAlign:'center',
     marginTop:150
   },

   textInput:{
     // marginLeft:60,
     // marginRight:60,
     width:200,
     margin:5,
     borderColor: 'transparent',
     borderWidth: 0.25,
     fontFamily:'quicksandRegular',
     marginTop:5,
     fontSize:15,
     //textAlign:'center',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#ffffff',
     color:'black',
     textAlignVertical:'center',
     shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 10

   },
   SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderWidth: .5,
      borderColor: '#000',
      height: 40,
      width:245,
      marginBottom:25,
      marginLeft:60,
      marginRight:60,
    },

   icon:{
     padding: 10,
     margin: 5,
     height: 25,
     width: 25,
     resizeMode : 'stretch',
     alignItems: 'center'

   },

   bounce:{
     marginLeft:50,
     width:250,
     height:250,
     marginTop:30
   },
   buttonText:{
     color:'#ffffff',
     fontSize: 15,
     fontFamily:'quicksandBold',
     textAlign:'center',
     height:35,
     textAlignVertical:'center'
   },
   button:{
     marginLeft:60,
     marginRight:60,
     shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 20,
     //marginTop:25,
     backgroundColor: '#669999',

   }

});
