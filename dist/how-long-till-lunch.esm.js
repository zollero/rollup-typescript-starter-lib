/**
 * rollup-typescript-starter-lib v1.0.0
 * Copyright 2018 zollero <corona7@163.com>
 */

import ms from"ms";function getNextLunchtime(t,e){var n=new Date;return n.setHours(t),n.setMinutes(e),n.setSeconds(0),n.setMilliseconds(0),n.valueOf()<Date.now()&&n.setDate(n.getDate()+1),n}function millisecondsUntil(t){return t.valueOf()-Date.now()}function howLongUntilLunch(t,e){void 0===t&&(t=12),void 0===e&&(e=30);var n=millisecondsUntil(getNextLunchtime(t,e));return ms(n,{long:!0})}export default howLongUntilLunch;
