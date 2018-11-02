import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import UserList from './userList';
// import Conversation from './conversation';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="chat font-sans w-full h-full bg-white rounded shadow flex items-stretch">
        <div className="users p-3 w-1/3">
          <h3 className="text-2xl px-3 py-2 antialiased text-grey-darkest">Connected Users</h3>
          <ul className="list-reset px-4 py-3">
            <li className="user antialiased block text-grey-darkest text-lg py-2">
              <FontAwesomeIcon className="align-middle text-teal text-xxs mr-3 mb-1" icon="circle" />
              Pedro
            </li>
            <li className="user antialiased block text-grey-darkest text-lg py-2">
              <FontAwesomeIcon className="align-middle text-teal text-xxs mr-3 mb-1" icon="circle" />
              Raul
            </li>
            <li className="user antialiased block text-grey-darkest text-lg py-2">
              <FontAwesomeIcon className="align-middle text-orange text-xxs mr-3 mb-1" icon="circle" />
              Santi
            </li>
          </ul>
          <h3 className="text-2xl px-3 py-2 antialiased text-grey-darkest">Disconnected Users</h3>
          <ul className="list-reset px-4 py-3">
            <li className="user antialiased block text-grey-darkest text-lg py-2">
              <FontAwesomeIcon className="align-middle text-red text-xxs mr-3 mb-1" icon="circle" />
              Mateo
            </li>
            <li className="user antialiased block text-grey-darkest text-lg py-2">
              <FontAwesomeIcon className="align-middle text-red text-xxs mr-3 mb-1" icon="circle" />
              Alex
            </li>
          </ul>
        </div>
        <div className="conversation w-2/3 bg-grey-lighter flex flex-col py-2 px-4">
          <div className="bg-white shadow-inner rounded my-2 px-6 py-3 overflow-y-scroll">
            <div className="flex flex-row my-2">
              <p className="relative bg-white rounded border border-teal shadow max-w-2/3 pl-4 py-2 pr-12 mr-2">
                Esto es un mensaje escrito.
                <span className="font-hairline text-xxs absolute pin-b pin-r mb-1 mr-2">12:56</span>
              </p>
            </div>
            <div className="flex flex-row my-2">
              <div className="relative bg-white rounded border border-teal shadow max-w-2/3 pl-4 py-2 pr-12 mr-2">
                <p className="font-hairline mb-1 text-teal">Pedro</p>
                <p>
                Esto es otro mensaje escrito pero esta vez mucho más largo.
                Tan largo que ocupa más de una línea.
                </p>
                <span className="font-hairline text-xxs absolute pin-b pin-r mb-1 mr-2">12:56</span>
              </div>
            </div>
            <div className="flex flex-row my-2">
              <p className="relative bg-white rounded border border-teal shadow max-w-2/3 pl-4 py-2 pr-12 mr-2">
                Esto es un mensaje escrito por otra persona.
                <span className="font-hairline text-xxs absolute pin-b pin-r mb-1 mr-2">12:56</span>
              </p>
            </div>
            <div className="flex flex-row-reverse my-2">
              <p className="relative bg-teal text-white rounded border border-teal shadow max-w-2/3 pl-4 py-2 pr-12 mr-2">
                Esto es un mensaje que he escrito yo.
                <span className="font-hairline text-white text-xxs absolute pin-b pin-r mb-1 mr-2">12:56</span>
              </p>
            </div>
            <div className="flex flex-row my-2">
              <p className="bg-white rounded border border-teal shadow max-w-2/3 px-4 py-2">
                Esto es otro mensaje escrito pero esta vez mucho más largo.
                Tan largo que ocupa más de una línea.
              </p>
            </div>
            <div className="flex flex-row my-2">
              <p className="bg-white rounded border border-teal shadow max-w-2/3 px-4 py-2">Esto es un mensaje escrito por otra persona.</p>
            </div>
            <div className="flex flex-row my-2">
              <p className="bg-white rounded border border-teal shadow max-w-2/3 px-4 py-2">
                Esto es otro mensaje escrito pero esta vez mucho más largo.
                Tan largo que ocupa más de una línea.
                Esto es otro mensaje escrito pero esta vez mucho más largo.
                Tan largo que ocupa más de una línea.
              </p>
            </div>
          </div>
          <div className="flex flex-no-grow bg-white rounded my-2 h-12 relative">
            <div className="flex-grow h-full align-middle">
              <input className="w-full h-full p-6 pr-16 appearance-none border-2 border-white rounded w-full py-2 px-4 leading-tight focus:outline-none focus:border-teal" />
            </div>
            <div className="absolute pin-r w-16 align-middle self-center text-teal text-center">
              <FontAwesomeIcon className="text-xl" icon="paper-plane" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
