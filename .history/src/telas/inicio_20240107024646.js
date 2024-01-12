import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>       
        <View style={{ alignItems: 'center', justifyContent: "space-around", flexDirection: 'row', paddingTop: 30 }}>
          <View style={{ alignItems: 'center', flexDirection: 'column' }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => { const { navigate } = this.props.navigation; navigate('Sistemas') }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Driver booster</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black' }}>O Driver Booster é um programa utilizado para atualizar os drivers do sistema em computadores com sistema operacional Windows.</Text>
              <Image style={{ width: 150, height: 150 }}
                source={require('../../img/SO.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'column' }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => { const { navigate } = this.props.navigation; navigate('Boot') }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Boot</Text>
              <Image style={{ width: 150, height: 150 }}
                source={require('../../img/boot3.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: "space-around", flexDirection: 'row', paddingTop: 30 }}>
          <View style={{ alignItems: 'right', flexDirection: 'column', paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => { const { navigate } = this.props.navigation; navigate('Pendrive') }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Pen drive bootável</Text>
              <Image style={{ width: 150, height: 150 }}
                source={require('../../img/PENDRIVE.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'right', flexDirection: 'column', paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => { const { navigate } = this.props.navigation; navigate('Utilitarios') }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Utilitários</Text>
              <Image style={{ width: 150, height: 150 }}
                source={require('../../img/UTILITARIOS.png')} />
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