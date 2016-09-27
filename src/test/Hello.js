import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Hello extends Component {
    getDefaultProps() {
        return {
            title: 'Hello'
        };
    }

    render() {
        return (
            <View>
                <Text>This is Splash </Text>
            </View>
        )
    }
}