import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';

class MessageItem extends Component {
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

class App extends Component {
  state = {
    inputValue: '',
    messages: [],
  }

  componentDidMount() {
    this.socket = io('http://1b850b86.ngrok.io/');
    console.log('this.socket', this.socket);
    this.socket.on('new received message', (data) => {
      this.addMessage(data);
    });
  }

  handleSubmit = (event) => {
    if (event.which === 13) {
      const value = event.target.value;
      const messages = this.state.messages;
      const message = {
        from: 'me',
        body: value,
        date: new Date().toString(),
      }

      this.socket.emit('new message', message);
      this.addMessage(message);
      this.setState({
        inputValue: '',
      });
    }
  }

  addMessage = (message) => {
    const messages = this.state.messages;
    this.setState({
      messages: messages.concat(message),
    });
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    const inputValue = this.state.inputValue;
    const messages = this.state.messages;
    return (
      <div className="App">
        <div className="App__header">
          Messenger (+33644604495)
        </div>
        <div className="App__content">
          <div className="MessageList">
            {messages.map(function(message, key) {
              return <MessageItem key={key} message={message} />;
            })}
          </div>
        </div>
        <div className="App__footer">
          <div className="input">
            <input placeholder="Type a message" value={inputValue} onChange={this.handleChange} onKeyDown={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
