import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Admob from '../componentes/admob'

const { width } = Dimensions.get('window')

class App extends Component {
  render() {
    return (
      <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1, backgroundColor: '#2F4F4F' }}>
        <ProgressSteps>
          <ProgressStep scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus1.png')} />
              <Text style={{ paddingTop: 20 }}>Baixe o Rufus pelo site oficial do software (https://rufus.ie/pt_BR/#). Você verá quatro opções para download. Neste tutorial, escolhemos a alternativa “portátil”, que dispensa instalação no computador.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus2.png')} />
              <Text style={{ paddingTop: 20 }}>Execute o programa. Com o Rufus aberto, verifique se o pen drive que você quer usar já aparece no seletor “Dispositivo”. Caso não, certifique-se de escolher a unidade correta antes de prosseguir.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus3.png')} />
              <Text style={{ paddingTop: 20 }}>Clique em “Selecionar” e escolha a imagem ISO que deseja usar para criar o seu disco bootável.
              </Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus4.png')} />
              <Text style={{ paddingTop: 20 }}>Aceite os termos da licença e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus5.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a instalação "personalizada (avançada)" e prossiga.</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default App;