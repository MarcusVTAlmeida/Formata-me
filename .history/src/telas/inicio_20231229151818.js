import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window')

class App extends Component {
  render() {
    return (
      <View style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 20, flex: 1, backgroundColor: '#2F4F4F' }}>
         <View style={{ alignItems: 'center' }}>
              {/* <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus1.png')} /> */}
                <Text style={styles.titleText}>Seja bem-vindo ao Formate-me</Text>
              <Text>O aplicativo que simplifica o processo de formatação de sistemas operacionais, proporcionando uma experiência intuitiva e eficiente. Este guia prático ajudará você a compreender e utilizar nosso aplicativo, garantindo que o processo de formatação seja uma tarefa acessível para todos.</Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  
export default App;