const moment = require('moment');

const messages = [
  { text: 'Un besito, chiqui.', timestamp: moment(), author: 'Mateo' },
];

const users = [
  { name: 'Pedro', connected: true },
  { name: 'Mateo', connected: true },
];

const manager = (io) => {
  io.on('connection', (socket) => {
    console.log('user connected');
    socket.emit('get data', { users, messages });
    socket.on('new message', (data) => {
      messages.push(data);
      console.log(messages[messages.length - 1]);
      io.emit('get data', { users, messages });
    });
  });
};

module.exports = manager;
