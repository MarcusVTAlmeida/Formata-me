import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions, StyleSheet, TouchableOpacity, Linking } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', justifyContent: "space-around" }}>
          <View style={{ alignItems: 'center', flexDirection: 'column', paddingTop: 15, paddingLeft: 10, paddingRight: 10 }}>
            <TouchableOpacity
              style={{ alignItems: 'center', borderColor: 'black', borderWidth: 5, backgroundColor: '#2F4F4F' }}
              onPress={() => {
                Linking.openURL('https://www.iobit.com/pt/driver-booster.php');
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Driver booster</Text>
              <Text style={{ fontSize: 12, color: 'white' }}>O Driver Booster é um programa utilizado para atualizar os drivers do sistema em computadores com sistema operacional Windows.</Text>
              <Image style={{ width: 100, height: 100 }}
                source={require('../../img/dbooster.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'column', paddingTop: 15, height: 150 }}>
            <TouchableOpacity
              style={{ alignItems: 'center', borderColor: 'black', borderWidth: 5, backgroundColor: '#2F4F4F' }}
              onPress={() => {
                Linking.openURL('https://www.win-rar.com/start.html?&L=9');
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Winrar</Text>
              <Text style={{ fontSize: 12, color: 'white' }}>WinRAR é um programa de compressão de dados bastante conhecido. Ele é utilizado para criar e descompactar arquivos no formato RAR e ZIP, entre outros.</Text>
              <Image style={{ width: 100, height: 100 }}
                source={require('../../img/winrar.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'column', paddingTop: 15 }}>
            <TouchableOpacity
              style={{ alignItems: 'center', borderColor: 'black', borderWidth: 5, backgroundColor: '#2F4F4F' }}
              onPress={() => {
                Linking.openURL('https://reactnative.dev');
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Rufos</Text>
              <Text style={{ fontSize: 12, color: 'white' }}>Rufus é um software livre e de código aberto utilizado para criar unidades flash USB inicializáveis.</Text>
              <Image style={{ width: 100, height: 100 }}
                source={require('../../img/rufos.png')} />
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