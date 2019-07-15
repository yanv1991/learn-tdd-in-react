import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";

import InboxScreen from "./components/InboxScreen";

// import NewMessageForm from "./NewMessageForm";
// import MessageList from './MessageList';

class App extends Component {
  state = { messages: [] };

  handleSend = newMessage => {
    console.log("newMessage", newMessage);
    this.setState(state => ({
      messages: [newMessage, ...state.messages]
    }));
  };

  /* {
    <div>
    <NewMessageForm onSend={this.handleSend} />
    <MessageList data={messages} />
  </div>
  } */

  render() {
    const { messages } = this.state;
    return (
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    );
  }
}

export default App;
