import React, { Component } from 'react';

import UserList from './userList';
import Conversation from './conversation';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: 'Pedro', connected: true },
        { name: 'Santi', connected: true },
        { name: 'Raul', connected: true },
        { name: 'Mateo', connected: false },
        { name: 'Alex', connected: false },
      ],
      messages: [
        { text: 'Esto es un mensaje.', timestamp: '12:26', author: 'Pedro' },
        { text: 'Esto es otro mensaje escrito pero esta vez mucho más largo. Tan largo que ocupa más de una línea.', timestamp: '12:28', author: 'Mateo' },
        { text: 'Esto es otro mensaje escrito.', timestamp: '12:30', author: 'Mateo' },
        { text: 'Esto es otro mensaje escrito algo más largo que el anterior.', timestamp: '13:10', author: 'Raul' },
      ],
    };
  }

  render() {
    const { users, messages } = this.state;
    return (
      <div className="chat">
        <UserList users={users} />
        <Conversation messages={messages} />
      </div>
    );
  }
}

export default Chat;
