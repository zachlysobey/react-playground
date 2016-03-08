import React from 'react';
import CheckList from './check-list.jsx';

export default ({id, title, description, tasks}) =>
  <div className="card">
    <div className="card__title">{title}</div>
    <div className="card__details">
      {description}
      <CheckList cardId={id} tasks={tasks} />
    </div>
  </div>
