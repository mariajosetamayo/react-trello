import React from 'react';

export default class UserInputForm extends React.Component {
  render(){
    return (
      <form onSubmit = {this.props.onAddSubmit}>
        <label>
          Note:
          <input type = 'text' onChange = {this.props.onAddInputChanged}/>
        </label>
        <input type = 'submit' value = 'Submit' />
      </form>
    );
  }
}
