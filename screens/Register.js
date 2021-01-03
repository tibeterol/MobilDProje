import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../Firebase';
export default class Register extends React.Component {
  state={
    email:"",
    password:""
  }
 
  kayitOl = (email, password) => {
    try {
      firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then(data => {
           ()=>showMessage({
          message: "Başarılı",
          description: "Kayıt Yapılıyor.",
          type: "success",
        }),

        firebase
  .firestore()
  .collection("Users")
  .doc(data.user.uid)
  .set({
    //name: this.state.name,
  })
  .then((ref) => {  });
        this.props.navigation.navigate('TabNavigation',data.user.uid)
    //const randomtut  = () => 1 + Math.round(Math.random() * 2)
   //  if(randomtut%2==0)
   //  else
    //     this.props.navigation.navigate('DrawNavigation',data.user.uid)
        
      }
         ).catch(error=>{
          /*showMessage({
            message: "Uyarı",
            description: "Girdiğiniz Bilgiler Hatalı.",
            type: "info",
          });*/
         });


        
} catch (error) {
      //console.log(error.toString(error));
      
    }
  };
/*
 <View style={styles.inputView} >             buralar sonra degerlendirilecek
          <TextInput  
            style={styles.inputText}
            placeholder="Ad..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ad:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Soyad..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({soyad:text})}/>
        </View>

*/

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
        <TouchableOpacity style={styles.sgnBtn}  onPress={()=>this.kayitOl(this.state.email,this.state.password)}>
          <Text style={styles.registerText}>Sign Up</Text>
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
    fontSize:60,
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
  sgnBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  registerText:{
    color:"white"
  }
});