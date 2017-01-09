import React from 'react';
import Card from './card';

export default function List(props){
  const cards = [];
  for (let i=0; i<props.cards.length; i++){
    cards.push(<Card key={i} text={props.cards[i]}/>);
  }
  return (
    <div className = "card-list">
      <h2 className = "cardListTitle">{props.title}</h2>
      {cards}
    </div>
  );
}
