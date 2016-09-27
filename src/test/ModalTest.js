//  HomePage
//  功能: 该类的作用
//  Created by 小广 on  2016-06-12 上午.
//  Copyright © 2016年  All rights reserved.

'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    Navigator,
    TextInput,
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
} from 'react-native';
var {width, height, scale} = Dimensions.get('window');
// 类
export default class ModalTest extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    // 加载完成
    componentDidMount() {
        //
    }

    // view卸载
    componentWillUnmount() {
        //
    }

    // 自定义方法区域
    // your method
    _leftButtonClick() {

    }

    _rightButtonClick() {
        //
        console.log('右侧按钮点击了');
        this._setModalVisible();
    }

    // 显示/隐藏 modal
    _setModalVisible() {
        let isShow = this.state.show;
        this.setState({
            show: !isShow,
        });
    }

    // 绘制View
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._rightButtonClick.bind(this)}>
                    <Text>
                        xxxxx
                    </Text>
                </TouchableHighlight>
                <Modal
                    animationType='slide'
                    transparent={true}

                    visible={this.state.show}
                    onShow={() => {
                    }}
                    onRequestClose={() => {
                    }}>
                    <View style={styles.modalStyle}>
                        <Text>
                            WTF
                        </Text>
                    </View>
                </Modal>
            </View>
        );
    }

}
// Modal属性
// 1.animationType bool  控制是否带有动画效果
// 2.onRequestClose  Platform.OS==='android'? PropTypes.func.isRequired : PropTypes.func
// 3.onShow function方法
// 4.transparent bool  控制是否带有透明效果
// 5.visible  bool 控制是否显示

// css样式
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECF0',
    },
    // modal的样式
    modalStyle: {
        // backgroundColor:'#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    // modal上子View的样式
    subView: {
        marginLeft: 60,
        marginRight: 60,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#ccc',
    },

});