import React from 'react';
import SecondCounter from './second-counter.jsx';
import FirebaseTest from './firebase-test.jsx';
import cardList from './kanban/kanban-data.js';
import KanbanBoard from './kanban/kanban-board.jsx';

export default () =>
  <div>
    <h1>React Playground</h1>
    <Counters intervals={[1, 3, 5]} />
    <FirebaseTest />
    <KanbanBoard cards={cardList} />
  </div>

const Counters = ({intervals}) =>
  <div>
    {
      intervals.map(interval =>
        <p key={interval}>
          {interval} Second Counter: {' '}
          <SecondCounter secondInterval={interval} />
        </p>
      )
    }
  </div>
