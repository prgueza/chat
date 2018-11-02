import React, { Component } from 'react';
import moment from 'moment';
import io from 'socket.io-client';
import UserList from './userList';
import Conversation from './conversation';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: io('http://localhost:3000'),
      user: {
        name: 'Pedro',
      },
      users: [],
      messages: [],
    };
  }

  componentDidMount() {
    const { socket } = this.state;
    socket.on('get data', (data) => {
      console.log('getting data...');
      const { users, messages } = data;
      this.setState({ users, messages });
    });
  }

  sendMessage = (text) => {
    const { socket, user: { name } } = this.state;
    const message = {
      author: name,
      timestamp: moment(),
      text,
    };
    socket.emit('new message', message);
  }

  render() {
    const { users, user, messages } = this.state;
    return (
      <div className="chat">
        <UserList users={users} />
        <Conversation messages={messages} user={user} sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default Chat;
