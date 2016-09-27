import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableHighlight,


} from 'react-native';

export default class CustomFun extends Component {


    static propTypes = {
        pubFun: PropTypes.func,
        //onClose: PropTypes.func,

    };

    constructor(props) {
        super(props);

    }
    render() {
        return (

            <View style={styles.container}>
                <TouchableHighlight
                    onPress={this.props.funA}

                >
                    <Text>
                        xxxxx
                    </Text>
                </TouchableHighlight>
            </View>

        );
    }

    _pubFun()
    {
        alert('_pubFun');
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#00ff00'
    },

});

