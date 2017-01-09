import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';

describe('List component', function(){
  it('Renders a list of cards', function(){
    const cardList = {title:'this is the title for the card test', cards: [{text:'card1'}, {text:'card2'}, {text:'card3'}]};

    const renderer = TestUtils.createRenderer();
    renderer.render(<List title = {cardList.title} cards = {cardList.cards}/>);
    const result = renderer.getRenderOutput();
    result.props.className.should.equal('card-list');

    const cards = result.props.children;
    cards[0].props.className.should.equal('cardListTitle');
    cards[0].type.should.equal('h2');
    cards[0].props.children.should.equal('this is the title for the card test');
    cards[1].should.have.length(3);
    cards[1][0].props.text.should.equal(cardList.cards[0]);
  });
});
