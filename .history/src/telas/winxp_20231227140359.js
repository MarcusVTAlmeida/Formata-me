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
              <Text>Selecione a partição que deseja formatar e prossiga apertando a tecla "D", caso seja um HD/SDD novo apenas .</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_17_45_24.png')} />
              <Text>Selecione o sistema operacional, também a arquitetura que deseja instalar e prossiga.
                "Saiba mais"
              </Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_17_45_37.png')} />
              <Text>Aceite os termos da licença e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_17_45_42.png')} />
              <Text>Selecione a instalação "personalizada (avançada)" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_17_46_07.png')} />
              <Text>Para formatar o seu HD você precisará selecionar todas as unidades que deseja apagar, selecionar a "opção de entrada" e selicionar a opção "excluir".</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_WINXP.1_20_11_2023_17_46_37.png')} />
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