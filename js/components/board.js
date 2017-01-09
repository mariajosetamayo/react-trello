import React from 'react';
import ListContainer from './list-container';


export default function Board(props){
  const cardListForBoard = [];
  for (let i=0; i<props.lists.length; i++){
    cardListForBoard.push(
      <div key={i}>
        <ListContainer listTitle={props.lists[i]} key={i} />
      </div>
    );
  }
  return (
    <div className = "card-list-board">
      <h1>{props.title}</h1>
      {cardListForBoard}
    </div>
  );
}
