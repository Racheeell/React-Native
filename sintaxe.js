import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Hello World</Text>
            <Text>Criado por DevMedia</Text>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        marginTop: 20,
        fontSize: 36,
    }
});