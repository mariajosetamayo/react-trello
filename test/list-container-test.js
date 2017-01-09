import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';
import UserInputForm from '../js/components/userInputForm';

describe('List container component', function(){
  beforeEach(function(){
    this.exampleCard = {title:'title example', cards : [{value:'this is a test card'}]};
  });

  it('renders a new card with text', function(){
    const renderer = TestUtils.createRenderer();
    renderer.render(<List title = {this.exampleCard.title} cards = {this.exampleCard.cards}/>);
    const result = renderer.getRenderOutput();
    result.props.className.should.equal('card-list');

    const cardList = result.props.children[0];
    cardList.props.className.should.equal('cardListTitle');
    cardList.type.should.equal('h2')
    cardList.props.children.should.equal('title example');

    const card = result.props.children[1];
    card[0].props.text.should.equal(this.exampleCard.cards[0])
  });
});
