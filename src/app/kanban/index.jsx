import React from 'react';
import cardList from './kanban/kanban-data.js';
import KanbanBoard from './kanban/kanban-board.jsx';

export default () => <KanbanBoard cards={cardList} />
