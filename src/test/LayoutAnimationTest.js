import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    LayoutAnimation,
    Dimensions
} from 'react-native';

export default  class LayoutAnimationTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            marginBottom: 0,
        };
    }

    // 加载完成
    componentDidMount() {
        //
        LayoutAnimation.spring();
    }




    _textUp() {
        LayoutAnimation.spring();
        this.setState({marginBottom: this.state.marginBottom + 200})
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this._textUp()}
                                  style={{
                                      width: 120,
                                      height: 40,
                                      alignItems: 'center',
                                      marginBottom: this.state.marginBottom,
                                      justifyContent: 'center',
                                      backgroundColor: '#00ffff',
                                      borderRadius: 20
                                  }}>
                    <Text>Text UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
var styles = StyleSheet.create({

    container:
    {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        backgroundColor:'#00ff00'
    },


});
