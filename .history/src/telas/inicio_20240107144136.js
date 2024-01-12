import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Admob from '../../admob'
class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingBottom: 30, alignItems: 'center', paddingTop: 30, paddingLeft: 20, paddingRight: 20, backgroundColor: '#2F4F4F' }}>
          <Text style={styles.titulo}>Seja bem-vindo ao Formate-me</Text>
          <Text style={styles.texto}>O aplicativo que simplifica o processo de formatação de sistemas operacionais, proporcionando uma experiência intuitiva e eficiente. Este guia prático ajudará você a compreender e utilizar nosso aplicativo, garantindo que o processo de formatação seja uma tarefa acessível para todos.</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: "space-around", flexDirection: 'row', paddingTop: 30 }}>
          <View style={{ alignItems: 'center', flexDirection: 'column' }}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => { const { navigate } = this.props.navigation; navigate('Sistemas') }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Sistemas operacionais</Text>
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