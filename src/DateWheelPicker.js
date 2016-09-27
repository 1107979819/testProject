import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Picker from 'react-native-wheel-picker'
var PickerItem = Picker.Item;
export  default class DateWheelPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yearselectedItem: 1,
            monthselectedItem: 0,
            dayselectedItem: 0,




            yearitemList: ['2015', '2016', '2017', '2018','2019','2020','2021','2022','2023','2024','2025','2026'],
            monthitemList: ['1', '2', '3', '4','5','6','7','8','9','10','11','12'],
            dayitemList: [ '1', '2', '3','4','5','6','7','8','9','10','11','12', '13', '14', '15','16','17','18','19','20','21','22','23','24', '25', '26', '27','28','29','30','31'],
        };
    }

    onPikcerSelect(index) {
        this.setState({
            selectedItem: index,
        })
    }

    onYearPikcerSelect(index) {

    }
    onMonthPikcerSelect(index) {
        // if(index===11)
        // {
        //     this.setState({
        //         monthitemList: [ '2', '3', '4','5','6','7','8','9','10','11','12','1'],
        //         monthselectedItem:10,
        //     })
        // }
    }
    onDayPikcerSelect(index) {

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
                <Picker style={{width: 80, height: 100}}
                        selectedValue={this.state.yearselectedItem}
                        itemStyle={{color: "#27b498", fontSize: 26,}}
                        onValueChange={(index) => this.onYearPikcerSelect(index)}>
                    {this.state.yearitemList.map((value, i) => (
                        <PickerItem label={value} value={i} key={"money" + value}/>
                    ))}
                </Picker>
                <Text style={styles.text}>
                    年
                </Text>
                <Picker style={{width: 60, height: 100}}
                        selectedValue={this.state.monthselectedItem}
                        itemStyle={{color: "#27b498", fontSize: 26,}}
                        onValueChange={(index) => this.onMonthPikcerSelect(index)}>
                    {this.state.monthitemList.map((value, i) => (
                        <PickerItem label={value} value={i} key={"money" + value}/>
                    ))}
                </Picker>
                <Text style={styles.text}>
                    月
                </Text>
                <Picker style={{width: 60, height: 100}}
                        selectedValue={this.state.dayselectedItem}
                        itemStyle={{color: "#27b498", fontSize: 26,}}
                        onValueChange={(index) => this.onDayPikcerSelect(index)}>
                    {this.state.dayitemList.map((value, i) => (
                        <PickerItem label={value} value={i} key={"money" + value}/>
                    ))}
                </Picker>
                <Text style={styles.text}>
                    日
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
        backgroundColor: '#ffffff',
        flexDirection: 'row',
    },
    text:
    {
        fontSize: 24
    }

});

