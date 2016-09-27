import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    RefreshControl,
    TouchableWithoutFeedback,
    DrawerLayoutAndroid,
    TouchableHighlight,
} from 'react-native';

export default class DrawerLayoutTest extends Component {

    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                ref={(drawer) => { this.drawer = drawer; }}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                    <TouchableHighlight onPress={() => this.drawer.openDrawer()}>
                        <Text>
                            xxxxx
                        </Text>
                    </TouchableHighlight>
                </View>
            </DrawerLayoutAndroid>
        );
    }

}