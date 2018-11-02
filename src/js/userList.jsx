import React from 'react';
import PropTypes from 'prop-types';
import User from './user';

const UserList = ({ users }) => {
  const list = users.map(user => <User user={user} />);
  return (
    <div className="users bg-grey-lighter w-1/3">
      {list}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.shape.isRequired,
};

export default UserList;
