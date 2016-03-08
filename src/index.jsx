import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';

require('./index.scss');
require('./app/kanban/kanban.scss');

ReactDOM.render(<App />, document.getElementById('app'));
