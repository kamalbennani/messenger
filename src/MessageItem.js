import React, { Component } from 'react';

export default class MessageItem extends Component {
  render() {
    const message = this.props.message;
    return (
      <div className="MessageItem">
        <div className="MessageItem__user" />
        <div className="MessageItem__content">
          <div className="MessageItem__body">
            <div className="MessageItem__title">{message.from}</div>
            <div className="MessageItem__text">{message.body}</div>
            {message.img && <div className="MessageItem__img"><img src={message.img} /></div>}
          </div>
          <div className="MessageItem__date">{message.date}</div>
        </div>
      </div>
    )
  }
}