import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Modal
} from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';

const images = [{
    url: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'
}, {
    url: 'http://img.sc115.com/uploads1/sc/jpgs/1508/apic22412_sc115.com.jpg'
}, {
    url: 'http://v1.qzone.cc/avatar/201407/07/00/24/53b9782c444ca987.jpg'
}]

export  default  class ImageViewerText extends React.Component {
    render() {
        try
        {
            return (

                <Modal visible={true} transparent={true}>
                    <ImageViewer visible={true} imageUrls={images}/>
                </Modal>

            )
        }catch (e)
        {

        }

    }
}
