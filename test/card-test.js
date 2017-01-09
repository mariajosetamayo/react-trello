import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function(){
  it('Renders the card text content', function(){
    const text = "this is text for the card test";

    const renderer = TestUtils.createRenderer();
    renderer.render(<Card text = {text} />);
    const result = renderer.getRenderOutput();
    result.props.className.should.equal('card');

    const textInCardContainer = result.props.children;
    textInCardContainer.props.className.should.equal('cardTextContent');

    const textInCard = textInCardContainer.props.children;
    textInCard.should.equal("this is text for the card test");
  });
});
