import React, {Component} from "react";
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  Image } from "react-native";


export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.top}>
               <Text style={styles.title}>Profile</Text>   
          </View>
          <View style={styles.mid1}>
                <Text style={styles.titleUser}>*Email Andress</Text>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput}
                      placeholder='Enter your email'
                      ></TextInput>
                </View>
                <Text style={styles.titleUser}>*Password</Text>
                <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}   
                      placeholder='Enter your password'
                      secureTextEntry={true}
                      ></TextInput>
                </View>
                <Text style={styles.forgotPassword}>Forgot password</Text>
          </View>
          <View style={styles.mid2}>
                <TouchableOpacity style={styles.signinButton}>
                  <Text style={styles.loginTitle} >Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.loginTitle} >Join Now</Text>
                </TouchableOpacity>

          </View>
          <View style={styles.bot}>
              
              
          </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  top: {
    flex: 1,
    flexDirection: 'column',
  },
  mid1: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  mid2: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bot: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue'
  },
  title: {
    color: 'black',
    textAlign: 'center',
    width: 400,
    fontSize: 30
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 1,
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
  textInput: {
    width: 280,
    height: 60
  },
  titleUser: {
      marginTop: 30,
      fontSize: 18,
       
  },
  forgotPassword: {
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'left',
    fontSize: 20
  },
  signinButton: {
    width :300,
    height:60,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 0)'
  },
  joinButton:{
    width: 300,
    height: 60,
    marginTop: 10,
    borderRadius: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)'  
  },
  loginTitle: {
    fontSize: 20,
    color: 'rgb(0,0,0)',
    fontWeight:'bold'
  },
  imgButton:{
    width:40,
    height:40,
  }
})