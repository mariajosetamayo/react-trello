import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import UserInputForm from '../js/components/userInputForm';

describe('Form component', function(){
  it('renders a form for user to fill in', function(){
    const renderer = TestUtils.createRenderer();
    renderer.render(<UserInputForm />);
    const result = renderer.getRenderOutput();
    result.type.should.equal('form');
    result.props.children[0].type.should.equal('label');

    const inputField = result.props.children[0].props;
    inputField.children[0].should.equal('Note:');
    inputField.children[1].type.should.equal('input');
    inputField.children[1].props.type.should.equal('text');

    const submitButton = result.props.children[1].props;
    submitButton.type.should.equal('submit');
    submitButton.value.should.equal('Submit');
  });
});
