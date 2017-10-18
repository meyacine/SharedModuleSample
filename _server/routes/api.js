'use strict';
var messages = require('./data/messages').messages;

exports.messages = function (req, res) {
  console.log('List all messages');
  if (!messages || messages.length === 0) {
    return res.status(204).json();
  }
  return res.status(200).json(messages);
};
