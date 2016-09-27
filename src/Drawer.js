import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';

export default class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: new Animated.Value(-250),
            isExpanding: false,
        };
    }

    componentWillMount() {

    }


    render() {
        return (
            <Animated.View style={[styles.container, {top: this.state.pos}]}>
                <View style={styles.btmBtnContainer}>
                    <View style={styles.resetView}>
                        <TouchableWithoutFeedback onPress={this._reset.bind(this)}>
                            <View>
                                <Text style={styles.resetText}>
                                    重置
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.ensureView}>
                        <TouchableWithoutFeedback onPress={this._ensure.bind(this)}>
                            <View>
                                <Text style={styles.ensureText}>
                                    确定
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Animated.View>
        );
    }

    _toggle() {
        if (this.state.isExpanding === false) {
            this._moveDown();

        } else {
            this._moveUp();

        }
    }

    _moveDown() {

        Animated.timing(
            this.state.pos,
            {
                toValue: 62,
                duration: 500,
            }
        ).start();
        this.state.isExpanding = true;
    }

    _moveUp() {
        Animated.timing(
            this.state.pos,
            {
                toValue: -240,
                duration: 500,
            }
        ).start();
        this.state.isExpanding = false;
    }

    _reset()
    {
        // if(this.state.isExpanding===true)
        // {
        //     this._moveUp();
        // }

    }
    _ensure()
    {
        if(this.state.isExpanding===true)
        {
            this._moveUp();
        }

    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        width: Dimensions.get('window').width,
        height: 240,
        zIndex: 1,
        justifyContent: 'flex-end',

    },
    //底部按钮
    btmBtnContainer: {

        flexDirection: 'row',
        height: 50,
    },
    resetView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ensureView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resetText: {
        fontSize:20,
    },

    ensureText: {
        fontSize:20,
        color:"#27b498"
    }


});