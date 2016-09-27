import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Picker from 'react-native-wheel-picker'
var PickerItem = Picker.Item;
export  default class WheelTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 2,
            itemList: ['刘备', '张飞', '关羽', '赵云', '黄忠', '马超', '魏延', '诸葛亮']
        };


    }

    onPikcerSelect(index) {
        this.setState({
            selectedItem: index,
        })
    }

    onAddItem() {
        var name = '司马懿'
        if (this.state.itemList.indexOf(name) == -1) {
            this.state.itemList.push(name)
        }
        this.setState({
            selectedItem: this.state.itemList.indexOf(name),
        })
    }

    onRemoveItem() {
        this.setState({
            itemList: ['关羽', '赵云',]
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Picker style={{width: 150, height: 120}}
                        selectedValue={this.state.selectedItem}
                        itemStyle={{color: "#27b498", fontSize: 26,}}
                        onValueChange={(index) => this.onPikcerSelect(index)}>
                    {this.state.itemList.map((value, i) => (
                        <PickerItem label={value} value={i} key={"money" + value}/>
                    ))}
                </Picker>


                <Text style={{margin: 20, color: '#ffffff'}}>
                    你最喜欢的是：{this.state.itemList[this.state.selectedItem]}
                </Text>

                <Text style={{margin: 20, color: '#ffffff'}}
                      onPress={this.onAddItem.bind(this)}>
                    怎么没有司马懿？
                </Text>
                <Text style={{margin: 20, color: '#ffffff'}}
                      onPress={this.onRemoveItem.bind(this)}>
                    删除
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1962dd',
    },


});

