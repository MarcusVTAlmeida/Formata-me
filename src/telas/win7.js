import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { InterstitialAd } from 'react-native-google-mobile-ads';

const { width } = Dimensions.get('window')

const adUnitId = 'ca-app-pub-2028860531808564/3601696446';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

class App extends Component {
  componentDidMount = () => { interstitial.load(); }
  onSubmitSteps = () => {
    interstitial.show()
    this.props.navigation.navigate('sistemas')
  };
  render() {
    return (
      <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1, backgroundColor: '#2F4F4F' }}>
        <ProgressSteps>
          <ProgressStep scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_15_52_37.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione o idioma desejado e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_15_53_03.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione "Avançar agora" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_15_53_19.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione o sistema operacional, também a arquitetura que deseja instalar e prossiga.
                "Saiba mais"
              </Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_15_53_32.png')} />
              <Text style={{ paddingTop: 20 }}>Aceite os termos da licença e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_15_53_45.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a instalação "personalizada (avançada)" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_15_54_17.png')} />
              <Text style={{ paddingTop: 20 }}>Para formatar o seu HD você precisará selecionar todas as unidades que deseja apagar, selecionar a "opção de entrada" e selecione a opção "excluir".</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_15_54_38.png')} />
              <Text style={{ paddingTop: 20 }}>Aguarde a instalação concluir.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_16_02_32.png')} />
              <Text style={{ paddingTop: 20 }}>Escolha um nome para o usuário, para o computador e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_16_02_47.png')} />
              <Text style={{ paddingTop: 20 }}>Digite uma senha para o usuário, caso não queira apenas prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_16_02_58.png')} />
              <Text style={{ paddingTop: 20 }}>Se tiver uma chave de ativação você pode aplicar, caso queria ativar mais tarde apenas prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_16_03_05.png')} />
              <Text style={{ paddingTop: 20 }}>selecione a opção "Usar configurações recomendadas" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_16_03_11.png')} />
              <Text style={{ paddingTop: 20 }}>Defina um horário e prossiga.
              </Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_16_03_17.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione uma das opções de rede
                saiba mais</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_16_03_43.png')} />
              <Text style={{ paddingTop: 20 }}>Aguarde.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
           onSubmit={ this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN7/VirtualBox_WIN7_07_10_2023_16_04_02.png')} />
              <Text style={{ paddingTop: 20 }}>O sistema foi instalado.</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default App;