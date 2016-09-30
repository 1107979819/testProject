import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Modal,
    Dimensions,
    Image,
} from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';

export  default  class ImagePanZoomTest extends React.Component {
    render() {
        return (
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={Dimensions.get('window').width}
                       imageHeight={Dimensions.get('window').width/2}>
                <Image style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width/2}}
                       source={{uri: 'http://airag.oss-cn-shenzhen.aliyuncs.com/00000013/20160630/00000013-20160630033251.jpg'}}/>
            </ImageZoom>
        )
    }
}
