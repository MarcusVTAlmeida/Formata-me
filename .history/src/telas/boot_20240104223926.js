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