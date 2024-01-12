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
  };
  render() {
    return (
      <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1, backgroundColor: '#2F4F4F' }}>
        <ProgressSteps>
          <ProgressStep scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/1.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione o idioma desejado e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/2.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione "Instalar agora" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/3.png')} />
              <Text style={{ paddingTop: 20 }}>Se tiver uma chave de ativação você pode aplicar, caso queria ativar mais tarde apenas prossiga.
              </Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/4.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione o sistema operacional, também a arquitetura que deseja instalar e prossiga.
                "Saiba mais"
              </Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/5.png')} />
              <Text style={{ paddingTop: 20 }}>Aceite os termos da licença e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/6.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a instalação "personalizada (avançada)" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/7.png')} />
              <Text style={{ paddingTop: 20 }}>Para formatar o seu HD você precisará selecionar todas as unidades que deseja apagar, selecionar a "opção de entrada" e selicionar a opção "excluir".</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/8.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione "Novo", crie um disco e clique em "Avançar" para dar continuidade na instalação.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/9.png')} />
              <Text style={{ paddingTop: 20 }}>Aguarde a instalação concluir.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/10.png')} />
              <Text style={{ paddingTop: 20 }}>O computador irá reiniciar.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/11.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione uma região e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/12.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione o layout do teclado.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/13.png')} />
              <Text style={{ paddingTop: 20 }}>Caso queira um segundo modelo para o teclado adicione, caso não queria apenas prossiga na opção "Pular".</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/14.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a opção "Configurar para uso pessoal" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/15.png')} />
              <Text style={{ paddingTop: 20 }}>Se tiver uma conta Microsoft adicione sua conta ou vá na opção recomendada "Conta offline".</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/16.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a opção "Experiencia limitada".</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/17.png')} />
              <Text style={{ paddingTop: 20 }}>Defina um nome para o computador e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/18.png')} />
              <Text style={{ paddingTop: 20 }}>Agora defina uma senha, caso não queira uma senha apenas deixa o campo em branco e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/19.png')} />
              <Text style={{ paddingTop: 20 }}>Caso queira importar dados de seu navegador vá na opção "Sim, importar", não há a necessidade de importar agora, Selecione a opção recomendada "Agora não" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/20.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a opção "Não" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/21.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a opção "Não" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/22.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a opção "Enviar dados de diagnóstico necessários" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/23.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a opção "Não" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/24.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a opção "Não" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/25.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a opção "Não" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/26.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a opção "Ignorar" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/27.png')} />
              <Text style={{ paddingTop: 20 }}>Selecione a opção "Agora não" e prossiga.</Text>
            </View>
          </ProgressStep>
          <ProgressStep
           <ProgressStep
           onSubmit={() => { this.onSubmitSteps; const { navigate } = this.props.navigation; navigate('Sistemas'); }}
            scrollViewProps={this.defaultScrollViewProps}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                source={require('../../img/WIN10/28.png')} />
              <Text style={{ paddingTop: 20 }}>O sistema foi instalado.</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default App;