import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { width } = Dimensions.get('window')
const Stack = createNativeStackNavigator();
class App extends Component {
  render() {
    return (
    <View style={{ flex: 1 }}>         
        <View style={{ alignItems: 'center', justifyContent: "space-around", flexDirection: 'row', paddingTop: 30 }}>
        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
        <TouchableOpacity
        onPress={() => { const { navigate } = this.props.navigation; navigate('winxp') }}>  
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Windows XP</Text>
        <Image style={{ width: 150, height: 150 }}
                source={require('../../img/SO.png')} />
        </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
        <TouchableOpacity
        onPress={() => { const { navigate } = this.props.navigation; navigate('win7') }}>   
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Windows 7</Text>
        <Image style={{ width: 150, height: 150 }}
                source={require('../../img/UTILITARIOS.png')} />
        </TouchableOpacity>  
        </View>       
        </View>
        <View style={{ alignItems: 'right', flexDirection: 'column', paddingTop: 30, paddingLeft: 20, paddingRight: 20  }}>
        <TouchableOpacity
        onPress={() => { const { navigate } = this.props.navigation; navigate('win8') }}>       
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Windows 8</Text>
        <Image style={{ width: 150, height: 150 }}
                source={require('../../img/PENDRIVE.png')} />
     </TouchableOpacity>      
     <TouchableOpacity
        onPress={() => { const { navigate } = this.props.navigation; navigate('win8') }}>       
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Windows 8</Text>
        <Image style={{ width: 150, height: 150 }}
                source={require('../../img/PENDRIVE.png')} />
     </TouchableOpacity>      
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 14,
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingBottom: 15
    },
  });
  
export default App;