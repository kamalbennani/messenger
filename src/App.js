import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';
import Input from './Input';
import MessageList from './MessageList';

class App extends Component {
  state = {
    inputValue: '',
    messages: [],
  }

  componentDidMount() {
    this.socket = io('http://1b850b86.ngrok.io/');
    this.socket.on('new received message', (data) => {
      this.addMessage(data);
    });
  }

  handleSubmit = (event) => {
    // Enter Event
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
            <div className="MessageItem">
              <div className="MessageItem__user"></div>
              <div className="MessageItem__content">
                <div className="MessageItem__body">{inputValue}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="App__footer">
          <Input inputValue={inputValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
