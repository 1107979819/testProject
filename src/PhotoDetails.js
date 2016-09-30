/**
 * https://github.com/ldn0x7dc/react-native-gallery
 * npm install --save react-native-gallery@latest
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import Gallery from 'react-native-gallery';
import {pxToDp} from './utils';

export default class PhotoDetails extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={{
                    position: 'absolute',
                    zIndex: 1,
                }}>
                    <Gallery
                        style={{
                            width: Dimensions.get('window').width,
                            height: Dimensions.get('window').height,
                            backgroundColor: '#ffffff',

                        }}
                        images={[
                            'http://airag.oss-cn-shenzhen.aliyuncs.com/00000013/20160630/00000013-20160630033251.jpg',
                            'http://airag.oss-cn-shenzhen.aliyuncs.com/00000013/20160630/00000013-20160630023250.jpg',
                            'http://airag.oss-cn-shenzhen.aliyuncs.com/00000013/20160630/00000013-20160630104745.jpg'
                        ]}
                    />
                </View>


                <View style={styles.topContainer}>
                    <TouchableOpacity style={{}} onPress={()=>alert('xxx')}>
                        <Image
                            style={{width: 20, height: pxToDp(40), margin: 5}
                            }
                            source={require('./img/actionbar_back.png')}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: pxToDp(38)}}>
                        照片详情
                    </Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: pxToDp(15)}}>
                        <TouchableOpacity >
                            <View style={styles.shareBtn}>
                                <Text style={{fontSize: pxToDp(38), color: 'white'}}>
                                    分享
                                </Text>
                                <Image
                                    style={{width: pxToDp(30), height: pxToDp(30),}
                                    }
                                    source={require('./images/icons/share.png')}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.btmContainer}>
                    <View style={styles.rowTextView}>
                        <Text style={[styles.detailsText]}>
                            大气候农业基地
                        </Text>
                        <Text style={[styles.detailsText]}>
                            黄皮
                        </Text>
                    </View>

                    <View style={styles.rowTextView}>
                        <Text style={[styles.detailsText]}>
                            时间：
                        </Text>
                        <Text style={[styles.detailsText]}>
                            2016年09月30日 17:00
                        </Text>
                    </View>

                    <View style={styles.rowTextView}>
                        <Text style={[styles.detailsText]}>
                            农眼：
                        </Text>
                        <Text style={[styles.detailsText]}>
                            0000001
                        </Text>
                    </View>

                </View>

            </View>
        )
    }
}
// css样式
var styles = StyleSheet.create({
    container: {},
    //顶部导航栏
    topContainer: {
        width: Dimensions.get('window').width,
        height: pxToDp(130),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#c4c4c4',
        position: 'absolute',
        zIndex: 1
    },
    //分享按钮样式
    shareBtn: {
        width: pxToDp(159),
        height: pxToDp(66),
        flexDirection: 'row',
        backgroundColor: '#27b498',
        borderRadius: pxToDp(10),
        alignItems: 'center',
        justifyContent: 'center',

    },
    //底部信息栏
   btmContainer: {
        top:Dimensions.get('window').height- pxToDp(300),
        width: Dimensions.get('window').width,
        height: pxToDp(300),
        backgroundColor: '#c4c4c4',
        position: 'absolute',
        zIndex: 1
    },
    //信息文字
    detailsText:
    {
        fontSize:pxToDp(30),
        marginLeft:pxToDp(15)
    },
    //没行信息文字容器
    rowTextView:
    {
        flexDirection:'row',
        marginLeft:pxToDp(30),
        marginBottom:pxToDp(22),
    },
});