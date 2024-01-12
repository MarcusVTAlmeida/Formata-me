import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions, StyleSheet, TouchableOpacity, Linking } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', justifyContent: "space-around" }}>
          <View style={{ alignItems: 'center', flexDirection: 'column', paddingTop: 30 }}>
            <TouchableOpacity
              style={{ alignItems: 'center', borderColor: 'black', borderWidth: 5, backgroundColor: '#2F4F4F' }}
              onPress={() => {
                Linking.openURL('https://reactnative.dev');
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Driver booster</Text>
              <Text style={{ fontSize: 12, color: 'white' }}>O Driver Booster é um programa utilizado para atualizar os drivers do sistema em computadores com sistema operacional Windows.</Text>
              <Image style={{ width: 100, height: 100 }}
                source={require('../../img/dbooster.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'column', paddingTop: 30 }}>
            <TouchableOpacity
              style={{ alignItems: 'center', borderColor: 'black', borderWidth: 5, backgroundColor: '#2F4F4F' }}
              onPress={() => {
                Linking.openURL('https://reactnative.dev');
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Driver booster</Text>
              <Text style={{ fontSize: 12, color: 'white' }}>O Driver Booster é um programa utilizado para atualizar os drivers do sistema em computadores com sistema operacional Windows.</Text>
              <Image style={{ width: 100, height: 100 }}
                source={require('../../img/dbooster.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'column', paddingTop: 30 }}>
            <TouchableOpacity
              style={{ alignItems: 'center', borderColor: 'black', borderWidth: 5, backgroundColor: '#2F4F4F' }}
              onPress={() => {
                Linking.openURL('https://reactnative.dev');
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Driver booster</Text>
              <Text style={{ fontSize: 12, color: 'white' }}>O Driver Booster é um programa utilizado para atualizar os drivers do sistema em computadores com sistema operacional Windows.</Text>
              <Image style={{ width: 100, height: 100 }}
                source={require('../../img/dbooster.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'column', paddingTop: 30 }}>
            <TouchableOpacity
              style={{ alignItems: 'center', borderColor: 'black', borderWidth: 5, backgroundColor: '#2F4F4F' }}
              onPress={() => {
                Linking.openURL('https://reactnative.dev');
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Driver booster</Text>
              <Text style={{ fontSize: 12, color: 'white' }}>O Driver Booster é um programa utilizado para atualizar os drivers do sistema em computadores com sistema operacional Windows.</Text>
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