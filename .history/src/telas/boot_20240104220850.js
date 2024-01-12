import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions, StyleSheet } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const { width } = Dimensions.get('window')

class App extends Component {
  render() {
    return (
      <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1, backgroundColor: '#2F4F4F' }}>
      <Text style={styles.titulo}>Teclas de atalho para Entrar na BIOS ou BOOT</Text>
      <Text>Marca	BOOT	BIOS
Acer	F12 (é necessário ativar o Boot Menu na BIOS)	F2 ou Del
Asus	F8 ou Esc	F2
Dell	F12	F2
Dynabook	F12	F2
Insys	F1 ou F11 (F8 para imagem de reposição)	F2
HP	F9	F10
Huawei	F12	F2
Lenovo	F12	F2
LG	F10	F2
Microsoft Surface	Desligue o Surface e pressione sem largar a tecla de diminuir Volume, seguido do botão Power	Desligue o Surface e pressione sem largar a tecla de aumentar Volume, seguido do botão Power
MSI	F11	Del
Positivo	F11	F2 ou Del
Samsung	F10	F2
Sony (Vaio)	F11 (sem largar)	F2
Toshiba	F12	F2</Text>


        <ProgressSteps>
          <ProgressStep scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus1.png')} />
              <Text style={{ paddingTop: 20}}>Baixe o Rufus pelo site oficial do software (https://rufus.ie/pt_BR/#). Você verá quatro opções para download. Neste tutorial, escolhemos a alternativa “portátil”, que dispensa instalação no computador.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus2.png')} />
              <Text style={{ paddingTop: 20}}>Execute o programa. Com o Rufus aberto, verifique se o pen drive que você quer usar já aparece no seletor “Dispositivo”. Caso não, certifique-se de escolher a unidade correta antes de prosseguir.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus3.png')} />
              <Text style={{ paddingTop: 20}}>Clique em “Selecionar” e escolha a imagem ISO que deseja usar para criar o seu disco bootável.
              </Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus4.png')} />
              <Text style={{ paddingTop: 20}}>Aceite os termos da licença e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/RUFOS/rufus5.png')} />
              <Text style={{ paddingTop: 20}}>Selecione a instalação "personalizada (avançada)" e prossiga.</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
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