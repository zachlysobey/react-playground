import React from 'react';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    const interval = Number(this.props.secondInterval);
    this.setState({secondsElapsed: this.state.secondsElapsed + interval});
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, this.props.secondInterval * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <span>{this.state.secondsElapsed}</span>
    );
  }

};
