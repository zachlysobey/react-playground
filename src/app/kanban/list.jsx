import React, {Component} from 'react';
import Card from './card.jsx';

export default class List extends Component {
  render() {
    const cards = this.props.cards.map(card => {
      return (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          tasks={card.tasks}
        />
      );
    })
    return (
      <div className="list">
        <h3>{this.props.title}</h3>
        {cards}
      </div>
    );
  }
}
