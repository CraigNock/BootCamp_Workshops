import React from 'react';

import './ChatMessage.css';



const ChatMessage = (props) => { 
    console.log(props);
    
    if(props.message.user.username !== props.currentUser.username) {
        console.log(props.currentUser)
        return (
        <div className="chat-message">
            <p className="user-name">{props.message.user.username}</p>
            <img className="avatar-icon" src={props.message.user.avatar} alt='avatar'/>
            <p className="other-message">
                {props.message.body}
                <img className="other-tip" src="/assets/tip-received.svg" alt="speechtip"/>
            </p>
            
        </div>
    )} else {
        return (
        <div className="message-line">
            <p className="user-message">
                {props.message.body}
                <img className="user-tip" src="/assets/tip-sent.svg" alt="speechtip"/>
            </p>
        </div>
        )
    };
    
};




export default ChatMessage;