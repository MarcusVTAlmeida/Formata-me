import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const { width } = Dimensions.get('window')

class App extends Component {
  render() {
    return (
      <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1, backgroundColor: '#2F4F4F' }}>
         <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus1.png')} />
              <Text>Baixe o Rufus pelo site oficial do software (https://rufus.ie/pt_BR/#). Você verá quatro opções para download. Neste tutorial, escolhemos a alternativa “portátil”, que dispensa instalação no computador.</Text>
            </View>
      </View>
    );
  }
}

export default App;