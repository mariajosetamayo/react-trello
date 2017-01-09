require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import Board from './components/board';
import Surprise from './components/soundCloud';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title={"Trello Board"} lists= {['list 1', 'list 2', 'list 3']} />,
    document.getElementById('app'))

    //ReactDOM.render(<Surprise/>, document.getElementById('app'))
);



// import React from 'react';
// import ReactDOM  from 'react-dom';
//
// import CardList from './components/list';
//
// document.addEventListener('DOMContentLoaded', () =>
//     ReactDOM.render(<CardList />, document.getElementById('app'))
// );


// import React from 'react';
// import ReactDOM  from 'react-dom';
//
// import Card from './components/card';
//
// document.addEventListener('DOMContentLoaded', () =>
//     ReactDOM.render(<Card />, document.getElementById('app'))
// );
