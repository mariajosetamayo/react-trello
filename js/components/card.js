import React from 'react';
import ReactDOM from 'react-dom';

export default function Card(props){
  return (
    <div className = "card">
      <div className = "cardTextContent">{props.text}</div>
    </div>
  );
}
