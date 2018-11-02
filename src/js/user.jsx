import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const User = ({ user: { name } }) => (
  <li className="user antialiased block text-grey-darkest text-lg py-2">
    <FontAwesomeIcon className="align-middle text-teal text-xxs mr-3 mb-1" icon="circle" />
    { name }
  </li>
);

User.propTypes = {
  user: PropTypes.shape.isRequired,
};

export default User;
