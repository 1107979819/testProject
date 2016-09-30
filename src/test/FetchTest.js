import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

export default class FetchTest extends Component {

    render() {
        return (
            <View>
                <TouchableWithoutFeedback onPress={this.requestGet.bind(this)}>
                    <View style={{
                        width: 100,
                        height: 30,
                        backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text>Get</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.requestPost.bind(this)}>
                    <View style={{
                        width: 100,
                        height: 30,
                        backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <Text>Post</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.requestGetTimeoutTest.bind(this)}>
                    <View style={{
                        width: 100,
                        height: 30,
                        backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <Text>getTimeoutTest</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.requestGetPic.bind(this)}>
                    <View style={{
                        width: 100,
                        height: 30,
                        backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <Text>requestGetPic</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>

        )
    }

    requestGet() {
        console.log('链接网络');
        fetch('http://wenyl.top/android/update/airagupdateinfo.php')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    console.log('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                }
            })
            .then((data) => {
                console.log(data.version)
            })
            .catch((err)=> {
                console.error(err)
            })
        console.log('执行后');
    }

    requestPost() {
        console.log('链接网络');
        fetch('http://t1307.airag.cn/ae/oauth/token?client_id=airag&client_secret=airag&grant_type=password&username=defaultuser&password=defaultuser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    console.log('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                }
            })
            .then((data) => {
                console.log(data.access_token)
            })
            .catch((err)=> {
                console.error(err)
            })
        console.log('执行后');
    }


    requestGetTimeoutTest() {
        console.log('链接网络');
        fetch('http://www.android.com/',
            {
                method: 'GET'
             //   , headers: {} // request header, format {a:1} or {b:[1,2,3]}
            //    , follow: 20 // maximum redirect count, 0 to not follow redirect
                , timeout: 5 // req/res timeout in ms, 0 to disable, timeout reset on redirect
            //    , compress: true // support gzip/deflate content encoding, false to disable
             //   , size: 0 // maximum response body size in bytes, 0 to disable
            //    , body: empty // request body, can be a string or readable stream
            //    , agent: null // custom http.Agent instance
            })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    console.log('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                }
            })
            .then((data) => {
                console.log(data.version)
            })
            .catch((err)=> {
                console.error(err)
            })
        console.log('执行后');
    }
    //http://t1307.airag.cn/ae/spec/pic/log?gps_x=23.25246568830887&gps_y=111.54324531555174&start_time=2016-06-20-15-59&end_time=2016-06-22-15-59&page_number=1&page_size=100&access_token=4d7f0b3a-13b0-41ee-b7e7-a42ccb4350a3
    requestGetPic() {
        console.log('链接网络');
        let url ='http://t1307.airag.cn/ae/spec/pic/log?gps_x=23.25246568830887&gps_y=111.54324531555174&start_time=2016-06-20-15-59&end_time=2016-06-22-15-59&page_number=1&page_size=10&access_token='
        url+='4d7f0b3a-13b0-41ee-b7e7-a42ccb4350a3'
        console.log(url);
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    console.log('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                }
            })
            .then((data) => {
                console.log(data.obj)
            })
            .catch((err)=> {
                console.error(err)
            })
        console.log('执行后');
    }


}



