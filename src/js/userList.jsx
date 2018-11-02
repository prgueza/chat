import React from 'react';
import PropTypes from 'prop-types';
import User from './user';

const UserList = ({ users }) => {
  const connectedUsers = users.map(user => user.connected && <User user={user} />);
  const disconnectedUsers = users.map(user => !user.connected && <User user={user} />);
  return (
    <div className="users p-3 w-1/3">
      <h3 className="text-2xl px-3 py-2 antialiased text-grey-darkest">Connected Users</h3>
      <ul className="list-reset px-4 py-3">
        { connectedUsers }
      </ul>
      <h3 className="text-2xl px-3 py-2 antialiased text-grey-darkest">Disconnected Users</h3>
      <ul className="list-reset px-4 py-3">
        { disconnectedUsers }
      </ul>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.shape.isRequired,
};

export default UserList;
