/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableHighlight
} from 'react-native';

export default class AnimatedTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: new Animated.Value(0),
        };
    }

    componentWillMount() {
     
    }

    render() {
        return (

            <Animated.View style={[styles.container, {top: this.state.pos}]}>
                <TouchableHighlight onPress={this._moveUp.bind(this)}>
                    <Text style={styles.welcome}>
                        Up
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._moveDown.bind(this)}>
                    <Text style={styles.welcome}>
                        Down
                    </Text>
                </TouchableHighlight>
            </Animated.View>
        );
    }

    _onClick()
    {
        this._move();
    }

    _moveDown()
    {
        Animated.timing(                          // 可选的基本动画类型: spring, decay, timing
            this.state.pos,                 // 将`bounceValue`值动画化
            {
                toValue: 300,                         // 将其值以动画的形式改到一个较小值
                duration: 500,                     // Bouncier spring
            }
        ).start();
    }

    _moveUp()
    {
        Animated.timing(                          // 可选的基本动画类型: spring, decay, timing
            this.state.pos,                 // 将`bounceValue`值动画化
            {
                toValue: 0,                         // 将其值以动画的形式改到一个较小值
                duration: 500,                     // Bouncier spring
            }
        ).start();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff00ff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        backgroundColor: '#ff0000',
    },

});

