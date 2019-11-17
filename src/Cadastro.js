import React, { Component } from 'react';
import { Alert, Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class cadastro extends Component {
  
  clicou = () => {
    Alert.alert('Login Efetuado');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.welcomeImage} source={require('./src/assets/images/carro.png')}
        />
        <Text style={styles.welcome}>Bem vindo ao Free Parking!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <TextInput style={styles.ctexto} placeholder='Digite sua matrícula'></TextInput>
        <TextInput style={styles.ctexto} secureTextEntry={true} placeholder='Digite sua senha'></TextInput>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity style={styles.botao}
                          onPress={ () => {this.clicou()}}>
            <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0CBF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageIcon: {
    width: 150,
    height:150
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  ctexto:{
    marginTop:10,
    padding:15,
    width:300,
    backgroundColor:'#fff',
    borderRadius:4,
    borderColor: '#F2F2F2',
    alignItems:'center',
    justifyContent:'center'
  },
  botao:{
    width:300,
    backgroundColor:'#4CB1F7',
    marginTop:10,
    padding:15,
    borderRadius:4,
    borderColor: '#F2F2F2'
  }
});
