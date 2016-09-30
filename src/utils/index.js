/*
* @Author: Daniel Zhou
* @Date:   2016-09-14 16:03:57
* @Last Modified by:   Daniel Zhou
* @Last Modified time: 2016-09-27 14:35:15
*/

import {Dimensions} from 'react-native';


const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 750;
/**
 * px转dp
 * @method pxToDp
 * @param  {Number} uiElementPx psd上元素大小
 * @return {Number}
 */
export function pxToDp(uiElementPx) {
	return uiElementPx *  deviceWidthDp / uiWidthPx;
}

/**
 * 替换阿里云图片域名
 * @method replaceAESImgDomain
 * @param  {String} url    [url路径]
 * @param  {String} params [处理参数]
 * @return {String}
 */
export function replaceAESImgDomain(url, params) {
	if(url){
		url = url.replace(/oss-cn-shenzhen.aliyuncs.com/g, 'img-cn-shenzhen.aliyuncs.com');
		url = url + params
	}
	return url
}
const timeUnits = [
	60,
	60 * 60,
	60 * 60 * 24,
	60 * 60 * 24 * 30,
	60 * 60 * 24 * 365
],
timespanTexts = [
	'刚刚',
	'分钟前',
	'小时前',
	'天前',
	'个月前',
	'年前'
];
/**
 * [格式化日期]
 * @method toDateString
 * @param  {Date|Number} date 日期
 * @return {String}
 */
export function toDateString(date){
	let timespan = (new Date - date) / 1000;

	if (timespan < 0) {
		if (typeof date === 'number') { date = new Date(date); }
		return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
	}

	let cmpValue = 1, prevCmpValue;
	for (var i = 0; i < timeUnits.length; i++) {
		prevCmpValue = cmpValue;
		cmpValue = timeUnits[i];
		if (timespan < cmpValue) {
			break;
		} else if (i === timeUnits.length - 1) {
			prevCmpValue = cmpValue;
		}
	}

	return (i ? parseInt(timespan / prevCmpValue) : '') + timespanTexts[i];
}

/**
 * 时间格式化
 * @method formatTimestamp
 * @param  {Number} date  时间戳
 * @param  {String} format 格式
 * @return {String} 
 */
export function formatTimestamp(date, format){
	var date = new Date(date),
		format = format || 'YYYY-MM-DD';

	var values = {
		Y: date.getFullYear(),
		M: date.getMonth() + 1,
		D: date.getDate(),
		h: date.getHours(),
		m: date.getMinutes(),
		s: date.getSeconds()
	};

	return format.replace(/Y+|M+|D+|h+|m+|s+/g, function(match) {
		var result = values[ match[0] ];
		if (match.length > 1 && result.toString().length !== match.length) {
			result = ( ( new Array(match.length) ).join('0') + result ).slice(-2);
		}
		return result;
	});
};

/**
 * 日期格式化
 * @method formatTimestamp
 * @param  {Number} date  时间戳
 * @param  {String} format 格式
 * @return {String} 
 */
export function formatDate(date, format){
	var fullDate = '20' + date,//2016-05-18-15-00
	dateArr = fullDate.split('-');
	var newDate = dateArr[0]+'/'+dateArr[1]+'/'+dateArr[2]+' '+dateArr[3]+':'+dateArr[4]
	
	var date = new Date(newDate),
		format = format || 'YYYY-MM-DD';

	var values = {
		Y: date.getFullYear(),
		M: date.getMonth() + 1,
		D: date.getDate(),
		h: date.getHours(),
		m: date.getMinutes(),
		s: date.getSeconds()
	};

	return format.replace(/Y+|M+|D+|h+|m+|s+/g, function(match) {
		var result = values[ match[0] ];
		if (match.length > 1 && result.toString().length !== match.length) {
			result = ( ( new Array(match.length) ).join('0') + result ).slice(-2);
		}
		return result;
	});
};