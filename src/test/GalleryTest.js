import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Gallery from 'react-native-gallery';

export default class GalleryTest extends Component {


    render() {
        return (
            <Gallery
                style={{flex: 1, backgroundColor: '#ffffff'}}
                images={[
                    'http://airag.oss-cn-shenzhen.aliyuncs.com/00000013/20160630/00000013-20160630033251.jpg',
                    'http://airag.oss-cn-shenzhen.aliyuncs.com/00000013/20160630/00000013-20160630023250.jpg',
                    'http://airag.oss-cn-shenzhen.aliyuncs.com/00000013/20160630/00000013-20160630104745.jpg'
                ]}
            />
        )
    }
}