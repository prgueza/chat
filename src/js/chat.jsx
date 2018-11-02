import React, { Component } from 'react';
import moment from 'moment';
import io from 'socket.io-client';
import UserList from './userList';
import Conversation from './conversation';
import Login from './login';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      socket: null,
      user: {
        name: 'Pedro',
      },
      users: [],
      messages: [],
    };
  }

  login = (name) => {
    const user = { name, connected: true };
    const socket = io('https://chat-develop.herokuapp.com/');
    socket.emit('login', user);
    socket.on('get data', (data) => {
      console.log('getting data...');
      const { users, messages } = data;
      this.setState({ users, messages });
    });
    this.setState({ user, socket, loggedIn: true });
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
    const {
      users, user, messages, loggedIn,
    } = this.state;
    return (
      <div className="chat">
        <UserList users={users} />
        { loggedIn
          ? <Conversation messages={messages} user={user} sendMessage={this.sendMessage} />
          : <Login login={this.login} />
        }
      </div>
    );
  }
}

export default Chat;
