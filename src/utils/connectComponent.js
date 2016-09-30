/*
* @Author: Daniel Zhou
* @Date:   2016-09-19 18:14:13
* @Last Modified by:   Daniel Zhou
* @Last Modified time: 2016-09-19 18:44:45
*/
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';


const options = {
	withRef: true
};


export default function connectComponent({ mapStateToProps, mapDispatchToProps, mergeProps, LayoutComponent }) {
	return connect(
		mapStateToProps || function (state) {
			return {};
		},
		mapDispatchToProps || function (dispatch) {
			return {
				actions: bindActionCreators(actions, dispatch)
			}
		},
		mergeProps,
		options
	)(LayoutComponent);
}
