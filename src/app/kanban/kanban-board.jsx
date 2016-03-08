import React from 'react';
import List from './list.jsx';

export default ({cards}) =>
  <div className="kanban-board">
    <h2>Kanban Board</h2>

    <List id="todo" title="To Do" cards={
      cards.filter(card => card.status === 'todo')
    } />
    <List id="in-progress" title="In Progress" cards={
      cards.filter(card => card.status === 'in-progress')
    } />
    <List id="done" title="Done" cards={
      cards.filter(card => card.status === 'done')
    } />
  </div>