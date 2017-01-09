import React from 'react';
import List from './list';
import UserInputForm from './userInputForm'

export default class ListContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      cards:[]
    };

     this.onAddInputChanged = this.onAddInputChanged.bind(this);
     this.onAddSubmit = this.onAddSubmit.bind(this);
  }

  onAddInputChanged(event){
     this.setState({value: event.target.value})
  }

  onAddSubmit(event){
    var joined = this.state.cards.concat(this.state.value); // concat is used intsed of push to add another card to the array of cards
    this.setState({
      cards: joined,
      value:''
  })
     event.preventDefault();
  }

  render(){
    return (
      <div>
        <List cards={this.state.cards} title={this.props.listTitle}/>
        <UserInputForm value={this.state.value} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit}/>
      </div>
    );
  }
}
