import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: "space-around" }}>
          <View style={{ alignItems: 'center', flexDirection: 'column', paddingTop: 15, paddingRight: 15, paddingLeft: 15, width: '100%' }}>
            <TouchableOpacity
              style={{ alignItems: 'center', borderColor: 'black', borderWidth: 5, backgroundColor: '#2F4F4F', width: '100%' }}
              onPress={() => {
                Linking.openURL('https://www.iobit.com/pt/driver-booster.php');
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Driver booster</Text>
              <Text style={{ fontSize: 12, color: 'white' }}>O Driver Booster é um programa utilizado para atualizar os drivers do sistema em computadores com sistema operacional Windows.</Text>
              <Image style={{ width: 100, height: 100 }}
                source={require('../../img/dbooster.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'column', paddingTop: 15, width: '100%', paddingRight: 15, paddingLeft: 15 }}>
            <TouchableOpacity
              style={{ alignItems: 'center', borderColor: 'black', borderWidth: 5, backgroundColor: '#2F4F4F', width: '100%' }}
              onPress={() => {
                Linking.openURL('https://www.win-rar.com/start.html?&L=9');
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Winrar</Text>
              <Text style={{ fontSize: 12, color: 'white' }}>WinRAR é um programa de compressão de dados bastante conhecido. Ele é utilizado para criar e descompactar arquivos no formato RAR e ZIP, entre outros.</Text>
              <Image style={{ width: 100, height: 100 }}
                source={require('../../img/winrar.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'column', paddingTop: 15, width: '100%', paddingRight: 15, paddingLeft: 15 }}>
            <TouchableOpacity
              style={{ alignItems: 'center', borderColor: 'black', borderWidth: 5, backgroundColor: '#2F4F4F', width: '100%' }}
              onPress={() => {
                Linking.openURL('https://rufus.ie/pt_BR/');
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Rufos</Text>
              <Text style={{ fontSize: 12, color: 'white' }}>Rufus é um software livre e de código aberto utilizado para criar unidades flash USB inicializáveis.</Text>
              <Image style={{ width: 100, height: 100 }}
                source={require('../../img/rufos.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'column', paddingTop: 15, width: '100%', paddingRight: 15, paddingLeft: 15, paddingBottom: 15 }}>
            <TouchableOpacity
              style={{ alignItems: 'center', borderColor: 'black', borderWidth: 5, backgroundColor: '#2F4F4F', width: '100%' }}
              onPress={() => {
                Linking.openURL('https://www.ccleaner.com/pt-br/ccleaner/download');
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Ccleaner</Text>
              <Text style={{ fontSize: 12, color: 'white' }}>O CCleaner é uma ferramenta de otimização e limpeza de sistema para computadores com sistema operacional Windows.</Text>
              <Image style={{ width: 100, height: 100 }}
                source={require('../../img/ccleaner.png')} />
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

export default App;