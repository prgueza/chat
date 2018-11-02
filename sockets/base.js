const conversation = [];

const manager = (io) => {
  io.on('connection', (socket) => {
    console.log('user connected');
    socket.emit('conversation', conversation);
    socket.on('message', (data) => {
      conversation.push(data);
    });
  });
};

module.exports = manager;
