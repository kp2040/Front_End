import React, { Component } from "react";

class UserGreetingClass extends Component {
  render() {
    return <h2>Hello, {this.props.username}! (Class Component)</h2>;
  }
}

export default UserGreetingClass;