/*
* @Author: Daniel Zhou
* @Date:   2016-09-19 20:03:24
* @Last Modified by:   Daniel Zhou
* @Last Modified time: 2016-09-20 15:24:28
*/

function encode(name, value, encoder) {
	return encoder(name) + ( value == null ? '' : ( '=' + encoder(value) ) );
}

/**
 * 把数据序列化为URL参数
 * @method stringify
 * @param  {<Object<name,value>>} data  数据
 * @return {String} URL参数串
 */
export function stringify(data) {
	if (typeof data === 'string') { return data; }
	let result = [ ];
	for (let name in data) {
		result.push( encode(name, data[name],encodeURIComponent));
	}
	return result.join('&');
}

/**
 * 把URL参数反序列化为数据
 * @method parse
 * @param {String} [qs] URL参数
 * @return {<Object<name,value>>} 数据
 */
export function parse(qs) {
	let data = { };
	qs = qs.replace(/^\?+/, '').split('&').forEach(function(pair) {
			if (!pair) { return; }

			pair = pair.split('=');
			// 只有参数名，没有等号和值的情况
			if (pair.length < 2) { pair.push(null); }
			data[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
		});

	return data;
}