import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      duong: 1
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        count: this.state.count + 5,
        duong: this.state.duong + 10
      });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <div>{this.props.children(this.state)}</div>;
  }
}
