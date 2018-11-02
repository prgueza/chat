import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div className="user block px-6 py-3">
    { user.name }
  </div>
);

User.propTypes = {
  user: PropTypes.shape.isRequired,
};

export default User;
