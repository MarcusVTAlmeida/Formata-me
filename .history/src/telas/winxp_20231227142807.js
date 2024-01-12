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
              <Text>Aperte a tecla "ENTER" para criar uma nova partição, você pode definir também o tamanho da partição que deseja criar.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_57_10.png')} />
              <Text>Aperte a tecla "ENTER" para fazer a instalação do WINDOWS XP.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_57_15.png')} />
              <Text>Selecione o formato que deseja formatar a partição, A formatação NTFS é o sistema de arquivos que o Windows gosta de usar por padrão para drives internos executando o sistema operacional ou utilizado como um drive de armazenamento secundário, após a escolha aperte a tecla "ENTER" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_57_19.png')} />
              <Text>Aguarde, o computador irá reiniciar, após isso remova o pen drive bootável.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_58_02.png')} />
              <Text>Aguarde o sistema iniciar para finalizar a instalação.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_58_26.png')} />
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