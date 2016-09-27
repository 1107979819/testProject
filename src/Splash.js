import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Splash extends Component {
  getDefaultProps() {
    return {
      title: 'Splash'
    };
  }

  render() {
    return (
      <View>
        <Text>This is Splash {this.props.title}.</Text>
      </View>
    )
  }
}