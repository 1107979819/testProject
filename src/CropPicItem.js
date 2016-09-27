import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    } from 'react-native';

export default class CropPicItem extends Component {
    constructor(props) {
         super(props);
     }

    _onClick(){
        alert('click：'+this.props.num);
    }
    render(){
      return (
       <TouchableWithoutFeedback onPress={ this._onClick.bind(this)} >
          <View style={styles.row}>

            <View style={styles.topContainer}>
                <Image
                     style={{width: 20, height: 30,}
                   }
                       source={require('./img/line_timelinepoint.png')}  />
                <Text style={styles.text}>
                  2016年09月22日 16:10
                </Text>
            </View>
            <View style={styles.btmContainer}>
                      <View style={{width: 20, height:182 ,}}
                        >
                        <Image
                             style={{width: 1.2, height: 182,resizeMode:'cover',alignSelf: 'center',}}
                               source={require('./img/line_timeline.png')}  />
                      </View>
                      <Image
                     style={{width: 288, height: 162,margin:10, }}
                          source={{uri: 'http://airag.oss-cn-shenzhen.aliyuncs.com/00000007/20160630/00000007-20160630045925.jpg'}}
                />
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    }
}
var styles = StyleSheet.create({
    row: {
            marginLeft:5,
    },
    text: {
       alignSelf: 'center',
        color: '#000',
        marginLeft:10,
    },

    //顶部容器 日期 及 左侧图片
    topContainer:
    {
      flexDirection:'row',
    },

    //底部容器 监控图片及 左侧图片
    btmContainer:
    {
      flexDirection:'row',
    },

});
