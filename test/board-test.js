import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';

describe ('Board component', function(){
  const lists = [{title:'this is the title for the card test', cards: [{text:'card1'}, {text:'card2'}, {text:'card3'}]},
                {title:'this is the title for the card test', cards: [{text:'card1'}, {text:'card2'}, {text:'card3'}]},
                {title:'this is the title for the card test', cards: [{text:'card1'}, {text:'card2'}, {text:'card3'}]}];

  const renderer = TestUtils.createRenderer();
  renderer.render(<Board title = 'Trello board test' lists = {lists}/>);
  const result = renderer.getRenderOutput();
  console.log('this is the result', result.props.children[1][0].props.children)
  console.log('this is the result', result.props.children[1][0])
  result.type.should.equal('div');
  result.props.className.should.equal('card-list-board');
  result.props.children[1].should.have.length(3);

  const board = result.props.children;
  board[0].type.should.equal('h1');
  board[0].props.children.should.equal('Trello board test');

  const listContainer = result.props.children[1][0]
  console.log('this is the title',listContainer.props.children.props.listTitle.cards)
  listContainer.props.children.props.listTitle.title.should.equal('this is the title for the card test');
  listContainer.props.children.props.listTitle.cards.should.have.length(3);
  listContainer.props.children.props.listTitle.cards[0].text.should.equal('card1');
  listContainer.props.children.props.listTitle.cards[1].text.should.equal('card2');
  listContainer.props.children.props.listTitle.cards[2].text.should.equal('card3');
});
