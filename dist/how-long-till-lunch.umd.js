/**
 * rollup-typescript-starter-lib v1.0.0
 * Copyright 2018 zollero <corona7@163.com>
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("ms")):"function"==typeof define&&define.amd?define(["ms"],t):e["rollup-typescript-starter-lib"]=t(null)}(this,function(e){"use strict";return e=e&&e.hasOwnProperty("default")?e.default:e,function(t,n){void 0===t&&(t=12),void 0===n&&(n=30);var o=function(e,t){var n=new Date;return n.setHours(e),n.setMinutes(t),n.setSeconds(0),n.setMilliseconds(0),n.valueOf()<Date.now()&&n.setDate(n.getDate()+1),n}(t,n).valueOf()-Date.now();return e(o,{long:!0})}});
