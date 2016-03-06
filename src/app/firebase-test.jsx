import React from 'react';
import Firebase from 'firebase';
import * as log from './utils/logger.js';

export default React.createClass({
  getInitialState: function() {
    return {
      readingMaterial: []
    }
  },
  componentWillMount: function() {
    const readingMaterialAccess = new Firebase('https://vivid-torch-4564.firebaseio.com/readingMaterial');
    readingMaterialAccess.on('value', (readingMaterialSnapshot) => {
      let items = readingMaterialSnapshot.val();
      this.setState({
        readingMaterial: items
      });
    }, log.error);
  },
  render: function() {
    let key = 0;
    const readingItems = this.state.readingMaterial.map(item => {
      return <p key={key++}>item: {item}</p>;
    });
    return (
      <div>
        <h2>Firebase test</h2>
        {readingItems}
      </div>
    );
  }
});
