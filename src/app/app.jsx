import React from 'react';
import SecondCounter from './second-counter.jsx';
import FirebaseTest from './firebase-test.jsx';

export default class extends React.Component {

  render() {
    const intervals = [1, 3, 5];
    const counters = intervals.map(interval => (
      <p key={interval}>
        {interval} Second Counter:
        {' '}
        <SecondCounter secondInterval={interval} />
      </p>
    ));
    return (
      <div>
        <h1>React Playground</h1>
        {counters}
        <FirebaseTest />
      </div>
    );
  }

};
