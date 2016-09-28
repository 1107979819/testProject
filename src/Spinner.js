import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
    Image,
} from 'react-native';
/**
 下拉菜单 地址：https://github.com/sohobloo/react-native-modal-dropdown
 http://www.cnblogs.com/sohobloo/p/react-native-modal-dropdown.html
 */
// import ModalDropdown from 'react-native-modal-dropdown';

import  ModalDropdown from './ModalDropdown';

const Farm_Mame = ['广州大气候农业科技有限公司农场1凑字数啦啦啦啦啦', '农场2', '农场3', '农场4', '农场5'];

export default class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

    }

    render() {
        return (
            <View>
                <ModalDropdown
                    ref={(drawer) => { this.spinnerUpdateLoa = drawer; }}
                    style={styles.modalDropdown}
                    defaultValue={Farm_Mame[0]}
                    textStyle={styles.dropdownText}
                    options={Farm_Mame}
                    dropdownStyle={styles.dropdownContainer}
                    renderRow={this._dropdownRenderRow.bind(this)}
                    onDropdownWillShow={this._onDropdownWillShow.bind(this)}
                    onDropdownWillHide={this._onDropdownWillHide.bind(this)}
                    onSelect={(idx, value) => this._onDropdownSelect(idx, value)}
                />
            </View>
        );
    }
    //下拉抽屉完全张开的时候调用
    _DrawerShow(){
        this.spinnerUpdateLoa._showAndUpdate();
    }
    

    _onDropdownWillShow() {
        console.log('_onDropdownWillShow');
    }

    _onDropdownWillHide() {
        console.log('_onDropdownWillHide');
    }

    _onDropdownSelect(idx, value) {
        alert(`idx=${idx}, value='${value}'`);
    }

    _dropdownRenderRow(rowData, rowID, highlighted) {
        let icon = highlighted ? require('./img/checked.png') : require('./img/unchecked.png');
        let evenRow = rowID % 2;
        return (
            <View style={[styles.dropdownRow]}>
                <Text style={[styles.dropdownRowText, highlighted && {color: 'mediumaquamarine'}]} numberOfLines={1}>
                    {rowData}
                </Text>
                <View style={styles.dropdownImageContainer}>
                    <Image style={styles.dropdownImage}
                           mode='stretch'
                           source={icon}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modalDropdown: {
        height:50,
        backgroundColor: '#d4d4d4',
        justifyContent:'center',
        marginLeft:20,
        marginRight:20,

    },
    dropdownContainer: {
        width: Dimensions.get('window').width-40,
        marginTop: 10,
        marginRight:20,
        backgroundColor: '#d4d4d4',

    },
    dropdownText: {
        color: '#000000',
        fontSize: 20,
        marginLeft: 20,
        width: 220,
    },
    dropdownRow: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    dropdownRowText: {
        marginHorizontal: 4,
        fontSize: 20,
        color: '#000000',
        textAlignVertical: 'center',
        marginLeft: 20,
        width: 250,

    },
    dropdownImageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 25,

    },
    dropdownImage: {
        width: 30,
        height: 30,
    },
});