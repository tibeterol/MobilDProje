import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as FirebaseCore from 'firebase';
import { firebase } from '@firebase/app';
require('firebase/auth')

export default class App extends React.Component {
  state={
    email:"",
    password:"",
    login: false
  }
  componentDidMount=()=>{
    var firebaseConfig = {
      apiKey: "AIzaSyCKwjgAFFXrWKaXojwa26o04QrOA_iIeIc",
      authDomain: "mobil-proje-9c3ff.firebaseapp.com",
      projectId: "mobil-proje-9c3ff",
      storageBucket: "mobil-proje-9c3ff.appspot.com",
      messagingSenderId: "363007359849",
      appId: "1:363007359849:web:c819e1f0fdefbd45189bf8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(auth=>{
    if (auth){
      console.log("giris yapildi")
    }
    else{
      console.log("giris yapilmadi")
    }
  })

  } 
  
  girisYap=()=>{
    firebase.auth.signInWithEmailAndPassword(this.state.email,this.state.password)
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>HeyAPP</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>this.girisYap()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});