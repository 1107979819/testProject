import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
    Image,
    ListView,
} from 'react-native';
Dimensions = require('Dimensions');
width = Dimensions.get('window').width;
height = Dimensions.get('window').height;

export default  class ListviewNetRequest extends Component {

    /**
     * 初始化数据
     */
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: ((row1, row2) => row1 !== row2)
            }),
            load: false
        }
    }

    /**
     * 渲染界面
     */
    render() {
        /**
         * 因为数据时异步加载， 用load判断是否正在加载 如果加载完毕重新刷新界面改变load值
         */
        if (!this.state.load) {
            return <Text>加载中...</Text>
        }

        return (this.renderView(this.state.dataSource))


    }


    renderView() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        )

    }

    /**
     * 重写renderRow
     */
    renderRow(rowData) {
        return (
            <View style={{ flex: 1 }}>
                <Image source={{ uri: rowData.picture }}
                       style={{ width: width, height: height / 2, marginTop: 5 }}
                />

            </View>
        )
    }


    /**
     * 加载耗时操作
     */
    componentDidMount() {
        this.getDataFromFetch();
    }

    getDataFromFetch() {
        let url = 'http://t1307.airag.cn/ae/spec/pic/log?gps_x=23.25246568830887&gps_y=111.54324531555174&start_time=2016-06-20-15-59&end_time=2016-06-22-15-59&page_number=1&page_size=10&access_token=4d7f0b3a-13b0-41ee-b7e7-a42ccb4350a3';
        //let url = 'http://gank.io/api/search/query/listview/category/福利/count/10/page/1';
        fetch(url)//请求地址
            .then((response) => response.json())//取数据
            .then((responseText) => {//处理数据
                //通过setState()方法重新渲染界面
                this.setState({
                    //改变加载ListView
                    load: true,
                    //设置数据源刷新界面
                    dataSource: this.state.dataSource.cloneWithRows(responseText.obj),
                })

            })
            .catch((error) => {
                console.warn(error);
            }).done();
    }
}