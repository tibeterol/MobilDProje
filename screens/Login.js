import React from 'react';
//loginden ana ekrana geçişte sorun var
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../Firebase';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }

  girisYap= (email, password) => {
    try {
      firebase
         .auth()
         .signInWithEmailAndPassword(email, sifre)
         .then(data=>{alert("Giris Basarili"),     
        this.props.navigation.navigate('Ana')  
      }
         ).catch(error=>{
           alert("Hatali giris")
         });

}catch (error) {
      //console.log(error.toString(error));
      
    }
  };

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>AtBiZar</Text>
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
        <TouchableOpacity style={styles.loginBtn} onPress={()=>this.girisYap(this.state.email,this.state.password)}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText} onPress={() => this.props.navigation.navigate('Register')}>Signup</Text>
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