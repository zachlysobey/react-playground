import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0
    };
  }

  tick() {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>React Playground</h1>
        <p>
          hello {this.props.name} {this.state.secondsElapsed}
        </p>
      </div>
    );
  }

}
