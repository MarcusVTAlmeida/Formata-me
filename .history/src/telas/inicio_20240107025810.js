import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions, StyleSheet, TouchableOpacity, Linking } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>       
        <View style={{ alignItems: 'center', justifyContent: "space-around", flexDirection: 'row', paddingTop: 30 }}>
          <View style={{ alignItems: 'center', flexDirection: 'column' }}>
            <TouchableOpacity
              style={{ alignItems: 'center', border: 5, borderColor: "#a36a00". bo }}
              onPress={() => { 
                Linking.openURL('https://reactnative.dev'); 
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Driver booster</Text>
              <Text style={{ fontSize: 12, color: 'black' }}>O Driver Booster é um programa utilizado para atualizar os drivers do sistema em computadores com sistema operacional Windows.</Text>
              <Image style={{ width: 100, height: 100 }}
                source={require('../../img/dbooster.png')} />
            </TouchableOpacity>
          </View>       
        
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