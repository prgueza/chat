import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const User = ({ user: { name } }) => (
  <li className="user">
    <FontAwesomeIcon className="user-icon" icon="circle" />
    { name }
  </li>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    connected: PropTypes.bool,
  }),
};

User.defaultProps = {
  user: null,
};

export default User;
