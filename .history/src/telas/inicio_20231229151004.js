import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const { width } = Dimensions.get('window')

class App extends Component {
  render() {
    return (
      <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1, backgroundColor: '#2F4F4F' }}>
         <View style={{ alignItems: 'center' }}>
              {/* <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus1.png')} /> */}
              <Text>Seja bem-vindo ao Tutorial FormatEasy, o aplicativo que simplifica o processo de formatação de sistemas operacionais, proporcionando uma experiência intuitiva e eficiente. Este guia prático ajudará você a compreender e utilizar nosso aplicativo, garantindo que o processo de formatação seja uma tarefa acessível para todos.</Text>
            </View>
      </View>
    );
  }
}

export default App;