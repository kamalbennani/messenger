import React from 'react';

export default class Input extends React.Component {
  render() {
    const inputValue = this.props.inputValue;
    const handleChange = this.props.handleChange;
    const handleSubmit = this.props.handleSubmit;
    return (
      <div className="input">
        <input placeholder="Type a message" value={inputValue} onChange={handleChange} onKeyDown={handleSubmit} />
      </div>
    )
  }
}