import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const { width } = Dimensions.get('window')

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ProgressSteps>
          <ProgressStep scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_56_20.png')} />
              <Text>Aguarde o inicio da instalação.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_56_34.png')} />
              <Text>Selecione a partição que deseja formatar e prossiga apertando a tecla "D", caso seja um HD/SDD novo apenas aperte "ENTER" e prossiga até a instalação.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_56_43.png')} />
              <Text>Aperte a tecla "ENTER" para prosseguir.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_56_50.png')} />
              <Text>Aperte a tecla "L" para fazer a exclusão dos dados do disco.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_56_58.png')} />
              <Text>Aperte a tecla "C" para criar uma nova partição no disco.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_57_03.png')} />
              <Text>Aperte a tecla "ENTER".</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_57_03.png')} />
              <Text>Aguarde a instalação concluir.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_17_53_15.png')} />
              <Text>Se tiver uma chave de ativação você pode aplicar, caso queria ativar mais tarde apenas prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_17_54_02.png')} />
              <Text>Escolha um nome para o computador, uma cor e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_17_54_22.png')} />
              <Text>Escolha a opção "Usar configurações expressas".</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_17_54_59.png')} />
              <Text>Caso tenho uma conta da Microsoft basta colocar, caso não tenha prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_17_55_21.png')} />
              <Text>Selecione a opção "criar uma conta local".</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_17_55_26.png')} />
              <Text>Digite um nome de usuário, uma senha e uma dica para se lembrar mais tarde, caso não queira apenas digite um nome para o usuário e prossiga.</Text>
            </View>
          </ProgressStep>          
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_17_55_39.png')} />
              <Text>Aguarde.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_18_24_58.png')} />
              <Text>O sistema foi instalado.</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default App;