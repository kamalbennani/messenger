import React, { Component } from 'react';
import { Input, Icon } from 'antd';

import 'antd/dist/antd.css'; 
import './App.css';

class MessageItem extends Component {
  render() {
    const message = this.props.message;
    return (
      <div className="MessageItem">
        <div className="MessageItem__user"></div>
        <div className="MessageItem__user">{message.user}</div>
        <div className="MessageItem__body">{message.body}</div>
        <div className="MessageItem__date">{message.date}</div>
      </div>
    )
  }
}

class App extends Component {
  state = {
    messages: [],
  }

  handleSubmit = (event) => {
    if (event.which === 13) {
      const value = event.target.value;
      const messages = this.state.messages;
      const message = {
        body: value,
        date: new Date().toString(),
      }
    
      this.setState({
        messages: messages.concat(message),
      })
    }
  }

  render() {
    const messages = this.state.messages;
    return (
      <div className="App">
        <div className="Input">
          <Input prefix={<Icon type="user" />} placeholder="Type a message" onKeyDown={this.handleSubmit} />
        </div>
        <div className="MessageList">
          {messages.map(function(message) {
            return <MessageItem message={message} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
