const Queue = require('bull');

const sendNotification = new Queue("SEND_NOTIFICATION");

module.exports = sendNotification