/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

// import Splash from './src/Splash';
// import Hello from './src/test/Hello';
// import RefreshControlTest from './src/test/RefreshControlTest';
// import RefreshControlExample from './src/test/RefreshControlExample';
// import DropdownTest from './src/test/DropdownTest';
// import CropPicList from './src/CropPicList';
// import DrawerLayoutTest from './src/test/DrawerLayoutTest';
// import LayoutAnimationTest from './src/test/LayoutAnimationTest';
// import  AnimatedTest from './src/test/AnimatedTest';
// import  ModalTest from './src/test/ModalTest';
// import  RefTest from './src/test/RefTest';
// import  WheelTest from './src/test/WheelTest';
//import  DateWheelTest from './src/test/DateWheelTest';
// import DropdownTestB from './src/test/DropdownTestB';
//import FetchTest from './src/test/FetchTest';
//import ListviewNetRequest from './src/test/ListviewNetRequest';
// import ImagePanZoomTest from './src/test/ImagePanZoomTest';
// import ImageViewerText from './src/test/ImageViewerText';
// import GalleryTest from './src/test/GalleryTest';
import PhotoDetails from './src/PhotoDetails';



class testProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

AppRegistry.registerComponent('testProject', () =>PhotoDetails);
