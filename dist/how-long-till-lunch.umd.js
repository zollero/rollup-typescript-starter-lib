/**
 * rollup-typescript-starter-lib v1.0.0
 * Copyright 2018-2020 zollero <corona7@163.com>
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('ms')) :
	typeof define === 'function' && define.amd ? define(['ms'], factory) :
	(global = global || self, global['rollup-typescript-starter-lib'] = factory(global.ms));
}(this, (function (ms) { 'use strict';

	ms = ms && Object.prototype.hasOwnProperty.call(ms, 'default') ? ms['default'] : ms;

	function getNextLunchtime(hours, minutes) {
	    var lunchtime = new Date();
	    lunchtime.setHours(hours);
	    lunchtime.setMinutes(minutes);
	    lunchtime.setSeconds(0);
	    lunchtime.setMilliseconds(0);
	    if (lunchtime.valueOf() < Date.now())
	        lunchtime.setDate(lunchtime.getDate() + 1);
	    return lunchtime;
	}

	function millisecondsUntil(date) {
	    return date.valueOf() - Date.now();
	}

	function howLongUntilLunch(hours, minutes) {
	    if (hours === undefined)
	        hours = 12;
	    if (minutes === undefined)
	        minutes = 30;
	    var millisecondsUntilLunchTime = millisecondsUntil(getNextLunchtime(hours, minutes));
	    return ms(millisecondsUntilLunchTime, { long: true });
	}

	return howLongUntilLunch;

})));
