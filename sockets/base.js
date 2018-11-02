const messages = [];

const users = [];

const manager = (io) => {
  io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('login', (data) => {
      users.push(data);
      socket.emit('get data', { users, messages });
    });
    socket.on('new message', (data) => {
      messages.push(data);
      console.log(messages[messages.length - 1]);
      io.emit('get data', { users, messages });
    });
  });
};

module.exports = manager;
