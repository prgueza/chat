import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleInput = (event) => {
    const { target: { value: text } } = event;
    this.setState({ text });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { sendMessage } = this.props;
    const { text } = this.state;
    sendMessage(text);
    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;
    return (
      <form className="write">
        <div className="write-input-container">
          <input className="write-input" value={text} onChange={this.handleInput} />
        </div>
        <button type="submit" className="write-icon-container" onClick={this.handleSubmit}>
          <FontAwesomeIcon className="write-icon" icon="paper-plane" />
        </button>
      </form>
    );
  }
}

Write.propTypes = {
  sendMessage: PropTypes.func,
};

Write.defaultProps = {
  sendMessage: null,
};

export default Write;
