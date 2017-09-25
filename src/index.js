import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js'
import Clock from  './clock.js'
import Expiration from './expiration.js'
import Toggle from './Toggle.js'
import LoginControl from './loginControl.js'


function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return(
        <div>
            <h1>Hello</h1>
            {
                unreadMessages.length &&
                    <h2>
                        You have {unreadMessages.length} unread messages.
                    </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re:React', 'SB', 'SDDD']

ReactDOM.render(
    <div>
        <Clock />
        <Clock />
        <Expiration decrement={1}/>
        <Toggle />
        <LoginControl />
        <MailBox unreadMessages={messages}/>
    </div>,

    document.getElementById('root')
);

// ReactDOM.render(
//     <Header />,
//     document.getElementById('root')
// );