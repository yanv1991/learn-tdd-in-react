import React, { Component } from "react";

export default class NewMessageForm extends Component {
  state = { inputText: "" };

  handleTextChange = event => {
    this.setState({ inputText: event.target.value });
  };
  handleSend = () => {
    const { inputText } = this.state;
    const { onSend } = this.props;

    onSend(inputText);
    this.setState({ inputText: "" });
  };
  render() {
    const { inputText } = this.state;
    return (
      <div>
        <input
          value={inputText}
          onChange={this.handleTextChange}
          type="text"
          data-testid="messageText"
        />
        <button onClick={this.handleSend} data-testid="sendButton">
          Send
        </button>
      </div>
    );
  }
}
