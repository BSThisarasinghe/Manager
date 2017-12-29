import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                style={styles.inputStyle}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
}

export { Input };