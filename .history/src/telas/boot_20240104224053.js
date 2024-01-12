import React, { Component } from 'react';
import { View, Text, Image, Modal, Dimensions, StyleSheet } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const { width } = Dimensions.get('window')

class App extends Component {
    render() {
        return (
            <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1, backgroundColor: '#2F4F4F' }}>
                <ProgressSteps>
                    <ProgressStep scrollViewProps={this.defaultScrollViewProps}>
                        <Text style={styles.titulo}>Teclas de atalho para Entrar na BIOS ou BOOT</Text>
                        <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                            source={require('../../img/boot.png')} />
                        <Text style={styles.texto}>Atualmente já é possível reiniciar o computador diretamente na BIOS, acedendo às Configurações do Windows 10. No entanto, existem situações em que a instalação do Windows está corrompida, ou estamos a instalar um novo disco, em que é necessário usar a tecla de atalho “padrão” para dar o Boot.

                            Possui apenas alguns segundos para pressionar a tecla correta para entrar na BIOS, e nesses momentos é seguramente melhor já conhecer a tecla correta. A tecla de BOOT varia consoante o fabricante, mas são basicamente as mesmas, F2, F10 ou Delete. Para facilitar a vida, decidimos criar a seguinte lista. Caso necessite de alguma marca ou modelo específico, basta enviar o seu comentário.</Text>
                    </ProgressStep>
                    <ProgressStep scrollViewProps={this.defaultScrollViewProps}>
                        <Text style={styles.titulo}>Entrar na BIOS através do Windows</Text>
                        <Image style={{ width: width * 0.9, height: width * 0.9 * 0.75 }}
                            source={require('../../img/boot.png')} />
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