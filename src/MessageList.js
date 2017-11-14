import React, { Component } from 'react';
import MessageItem from './MessageItem';

export default class MessageList extends React.Component {
  render() {
    const messages = this.props.messages;
    return (
      <div className="MessageList">
        {messages.map(function(message, key) {
          return <MessageItem key={key} message={message} />;
        })}
      </div>
    )
  }
}
