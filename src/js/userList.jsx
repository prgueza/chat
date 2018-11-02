import React from 'react';
import PropTypes from 'prop-types';
import User from './user';

const UserList = ({ users }) => {
  const connectedUsers = users.map(user => user.connected && <User user={user} />);
  const disconnectedUsers = users.map(user => !user.connected && <User user={user} />);
  return (
    <div className="users">
      <h3 className="users-header">Connected Users</h3>
      <ul className="users-list">
        { connectedUsers }
      </ul>
      <h3 className="users-header">Disconnected Users</h3>
      <ul className="users-list">
        { disconnectedUsers }
      </ul>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.shape.isRequired,
};

export default UserList;
