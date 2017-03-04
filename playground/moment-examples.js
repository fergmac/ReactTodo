var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1488585473;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ H:mm a'));
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ H:mm A'));