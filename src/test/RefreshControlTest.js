import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    RefreshControl,
    TouchableWithoutFeedback,
    } from 'react-native';

class  Row  extends Component {

  constructor(props) {
       super(props);
       this._onClick = this._onClick.bind(this);
   }


  _onClick(){
      console.dir('_handleClick'+this.props.data.text+""+this);
       this.props.onClick(this.props.data);
  }


  render(){
    return (
     <TouchableWithoutFeedback onPress={ this._onClick} >
        <View style={styles.row}>
          <Text style={styles.text}>
            {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
          </Text>
          <Text style={styles.text}>
            {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
          </Text>

        </View>
      </TouchableWithoutFeedback>
    );
  }


}


export default class RefreshControlTest extends Component {

  static title: '<RefreshControl>';
  static  description: 'Adds pull-to-refresh support to a scrollview.';


  constructor(props) {
       super(props);
       this.state = {
         isRefreshing: false,
         loaded: 0,
         rowData: Array.from(new Array(20)).map(
           (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
       };
      this._onRefresh = this._onRefresh.bind(this);
   }

 _onClick(row) {
   row.clicks++;
   this.setState({
     rowData: this.state.rowData,
   });
 };

 render() {
   const rows = this.state.rowData.map((row, ii) => {
     return <Row  key={ii} data={row} onClick={this._onClick.bind(this)}/>;
   });
   return (
     <ScrollView
       style={styles.scrollview}
       refreshControl={
         <RefreshControl
           refreshing={this.state.isRefreshing}
           onRefresh={this._onRefresh}
           tintColor="#ff0000"
           title="Loading..."
           titleColor="#00ff00"
           colors={['#ff0000', '#00ff00', '#0000ff']}
           progressBackgroundColor="#ffff00"
         />
       }>
       {rows}
     </ScrollView>
   );
 }

 _onRefresh() {
   this.setState({isRefreshing: true});
   setTimeout(() => {
     // prepend 10 items
     const rowData = Array.from(new Array(10))
     .map((val, i) => ({
       text: 'Loaded row ' + (+this.state.loaded + i),
       clicks: 0,
     }))
     .concat(this.state.rowData);

     this.setState({
       loaded: this.state.loaded + 10,
       isRefreshing: false,
       rowData: rowData,
     });
   }, 2000);
 }
}

var styles = StyleSheet.create({
    row: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    scrollview: {
        flex: 1,
    },
});
