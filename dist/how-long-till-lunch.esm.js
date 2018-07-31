import ms from 'ms';

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

export default howLongUntilLunch;
