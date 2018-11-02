import React from 'react';
import PropTypes from 'prop-types';
import User from './user';

const UserList = ({ users }) => {
  const connectedUsers = users.map(user => user.connected && <User user={user} key={user.name} />);
  const disconnectedUsers = users.map(user => !user.connected && <User user={user} key={user.name} />);
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
  users: PropTypes.arrayOf(PropTypes.object),
};

UserList.defaultProps = {
  users: null,
};

export default UserList;
