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
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_44_59.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione o idioma desejado e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_45_12.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione "Instalar agora" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_45_24.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione o sistema operacional, também a arquitetura que deseja instalar e prossiga.
                "Saiba mais"
              </Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_45_37.png')} />
              <Text style={{ paddingTop: 20 }}>Aceite os termos da licença e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_45_42.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a instalação "personalizada (avançada)" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_46_07.png')} />
              <Text style={{ paddingTop: 20 }}>Para formatar o seu HD você precisará selecionar todas as unidades que deseja apagar, selecionar a "opção de entrada" e selicionar a opção "excluir".</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_46_37.png')} />
              <Text style={{ paddingTop: 20 }}>Aguarde a instalação concluir.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_53_15.png')} />
              <Text style={{ paddingTop: 20 }}>Se tiver uma chave de ativação você pode aplicar, caso queria ativar mais tarde apenas prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_54_02.png')} />
              <Text style={{ paddingTop: 20 }}>Escolha um nome para o computador, uma cor e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_54_22.png')} />
              <Text style={{ paddingTop: 20 }}>Escolha a opção "Usar configurações expressas".</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_54_59.png')} />
              <Text style={{ paddingTop: 20 }}>Caso tenho uma conta da Microsoft basta colocar, caso não tenha prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_55_21.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a opção "criar uma conta local".</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_55_26.png')} />
              <Text style={{ paddingTop: 20 }}>Digite um nome de usuário, uma senha e uma dica para se lembrar mais tarde, caso não queira apenas digite um nome para o usuário e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_17_55_39.png')} />
              <Text style={{ paddingTop: 20 }}>Aguarde.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            onSubmit={ this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN8/VirtualBox_win8.1_20_11_2023_18_24_58.png')} />
              <Text style={{ paddingTop: 20 }}>O sistema foi instalado.</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default App;