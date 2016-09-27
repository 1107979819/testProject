import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    RefreshControl,
    Picker,
    Image,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Dimensions,
    Animated,
} from 'react-native';

import CropPicItem from './CropPicItem';
import CustomFun from './test/CustomFun';
import Drawer from './Drawer';
/**
 下拉菜单 地址：https://github.com/sohobloo/react-native-modal-dropdown
 http://www.cnblogs.com/sohobloo/p/react-native-modal-dropdown.html
 */
import ModalDropdown from 'react-native-modal-dropdown';

const Farm_Mame = ['广州大气候农业科技有限公司农场1凑字数啦啦啦啦啦', '农场2', '农场3', '农场4', '农场5'];


export default class CropPicList extends Component {

    static title: '<RefreshControl>';
    static  description: 'Adds pull-to-refresh support to a scrollview.';

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(10)).map(
                (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
            pos: new Animated.Value(-240),
            isExpanding: false,

        };
        this._onRefresh = this._onRefresh.bind(this);
    }


    _onClick(row) {
        row.clicks++;
        this.setState({
            rowData: this.state.rowData,
        });
    };

    _funA()
    {
        alert('xxxafafafx');
    }
    render() {
        const rows = this.state.rowData.map((row, ii) => {
            return <CropPicItem num={ii} key={ii} data={row} onClick={this._onClick.bind(this)}/>;
        });
        return (
            <View style={styles.conatainer}>
                <View style={styles.topConatainer}>
                    <ModalDropdown
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
                    <View style={styles.filterContainer}>
                        <TouchableWithoutFeedback onPress={() => this.drawer._toggle()}>
                            <View>
                                <Text style={styles.filterText}>
                                    筛选
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                </View>
                <Animated.View style={[styles.drawerContainer, {top: this.state.pos,}]}>
                    <View>

                    </View>
                </Animated.View>
                <Drawer ref={(drawer) => { this.drawer = drawer; }} />

                <ScrollView
                    style={styles.scrollview}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                        />
                    }>
                    <CropPicItem/>
                    {rows}
                </ScrollView>
            </View>

        );
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // prepend 10 items
            const rowData = Array.from(new Array(10))
                .map((val, i) => ({
                    text: 'Loaded row ' + (+this.state.loaded + i),
                    clicks: 0,
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 10,
                isRefreshing: false,
                rowData: rowData,
            });
        }, 2000);
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

var styles = StyleSheet.create({
    conatainer: {
        flex: 1,

    },
    //顶部容器，筛选条件
    topConatainer: {
        height: 62,
        backgroundColor: '#000000',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 2,
    },
    row: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    scrollview: {
        flex: 1,
    },
    modalDropdown: {},
    dropdownContainer: {
        width: 420,
        marginTop: 20,
        backgroundColor: '#000000',
    },
    dropdownText: {
        color: '#ffffff',
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
        color: '#ffffff',
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
    filterContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 40,
    },
    filterText: {
        fontSize: 20,
        color: '#ffffff',

    },
    drawerContainer: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        width: Dimensions.get('window').width,
        height: 240,
        zIndex: 1,
    },

});
