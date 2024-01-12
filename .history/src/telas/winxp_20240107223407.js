import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Alert } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { BannerAd, BannerAdSize, InterstitialAd } from 'react-native-google-mobile-ads';
const { width } = Dimensions.get('window')

const adUnitId = 'ca-app-pub-3940256099942544/1033173712';
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

class App extends Component {
  onSubmitSteps = () => {
    interstitial.load();
    setTimeout(() => {
        interstitial.show()
      }, 10000);
  };
  render() {
    return (
      <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1, backgroundColor: '#2F4F4F' }}>       
        <ProgressSteps>
          <ProgressStep onNext={this.onNextStep} scrollViewProps={this.defaultScrollViewProps} >
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_56_20.png')} />
              <Text style={{ paddingTop: 20 }}>Aguarde o inicio da instalação.</Text>
            </View>
          </ProgressStep> 
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 1, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_56_34.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a partição que deseja formatar e prossiga apertando a tecla "D", caso seja um HD/SDD novo apenas aperte "ENTER" e prossiga até a instalação.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_56_43.png')} />
              <Text style={{ paddingTop: 20 }}>Aperte a tecla "ENTER" para prosseguir.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_56_50.png')} />
              <Text style={{ paddingTop: 20 }}>Aperte a tecla "L" para fazer a exclusão dos dados do disco.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_56_58.png')} />
              <Text style={{ paddingTop: 20 }}>Aperte a tecla "C" para criar uma nova partição no disco.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_57_03.png')} />
              <Text style={{ paddingTop: 20 }}>Aperte a tecla "ENTER" para criar uma nova partição, você pode definir também o tamanho da partição que deseja criar.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_57_10.png')} />
              <Text style={{ paddingTop: 20 }}>Aperte a tecla "ENTER" para fazer a instalação do WINDOWS XP.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_57_15.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione o formato que deseja formatar a partição, A formatação NTFS é o sistema de arquivos que o Windows gosta de usar por padrão para drives internos executando o sistema operacional ou utilizado como um drive de armazenamento secundário, após a escolha aperte a tecla "ENTER" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_57_19.png')} />
              <Text style={{ paddingTop: 20 }}>Aguarde, o computador irá reiniciar, após isso remova o pen drive bootável.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_58_02.png')} />
              <Text style={{ paddingTop: 20 }}>Aguarde o sistema iniciar para finalizar a instalação.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_13_58_26.png')} />
              <Text style={{ paddingTop: 20 }}>Aguarde o fim da instalação, após isso o sistema ira inicializar.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
           onSubmit={this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WINXP/VirtualBox_winxp_27_12_2023_14_29_12.png')} />
              <Text style={{ paddingTop: 20 }}>O sistema foi instalado.</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>       
        {/* <View style={{ bottom: 0 }}>
          <Admob />
        </View> */}
      </View>
    );
  }
}

export default App;