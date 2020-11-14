import { Component } from "react"; 
import OneParticipantMatching from '../components/oneParticipantMatching'

// TODO: Those functions should be moved to a utils file 
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array 
}
class SecretSantaComponent extends Component {
    state = {
      participants: [
        {name: 'robin1', mail: 'rob@rob.com'},
        {name: 'robin2', mail: 'rob@rob.com'},
        {name: 'robin3', mail: 'rob@rob.com'},
        {name: 'robin4', mail: 'rob@rob.com'}

      ], 
      name: '',
      mail: '', 
      shuffledParticipants: [],
      participantMatchingToDisplay: null 
  }
  removeParticipant(ix)
  {
    this.state.participants.splice(ix, 1)
    this.setState({participants: this.state.participants, participantMatchingToDisplay: []})

  }
  onParticipantInputChange(e)
  {
    let new_state = {}
    new_state[e.target.name] = e.target.value
    this.setState(new_state)
  }

  setupParticipantMatching(participants)
  {
    let participantMatching = participants.map((val, ix) => 
      <OneParticipantMatching key={ix} ix={ix} offer={participants[ix]} receiver={participants[(ix + 1) % participants.length]}/>
    )
    shuffleArray(participantMatching) // We reshuffle the participants before displaying them
    this.setState({participantMatchingToDisplay: [...participantMatching]})
  }

  handleDrawBourreauVictime()
  {
    let participants = [...this.state.participants]
    shuffleArray(participants)
    this.setState({shuffledParticipants: participants})
    this.setupParticipantMatching(participants)
  }


  handleSubmit(e)
  {
    let people = {name: this.state.name, mail: this.state.mail}
    if (true) // (emailIsValid(this.state.mail)) TODO: during the test phase we do not check for valid mail
    {
    this.setState({participants: [...this.state.participants, people], name: '', mail: '', shuffledParticipants: [], participantMatchingToDisplay:[]})
    }
    else
    {
      alert('invalid mail')
    }
  }
  render() {
  return (
    <div>
      <h2>Add a new participant</h2>
      <form>
        <label>Name: 
        <input type="text" name="name" onChange={(e) => this.onParticipantInputChange(e)} value={this.state.name}/>
        <br/>
        </label>
        <label>Mail: 
        <input type="text" name="mail" onChange={(e) => this.onParticipantInputChange(e)} value={this.state.mail}/>
        </label>
        <br/>
      </form>
      <button onClick={(e) => this.handleSubmit(e)} disabled={(!this.state.name)}> Submit </button> 
      {/* TODO: add a check that the mail of the user is empty here */}
      <h2>List of participants</h2>
      <ul> 
      
      {this.state.participants.map((e, ix) =>  <li key={ix}> {e.name}, {e.mail}  <button onClick={() => this.removeParticipant(ix)}> DELETE </button> </li>)} 
      </ul>
      <button onClick={() => this.handleDrawBourreauVictime()}> Draw a secret santa </button>
      <h2>Our list of secret santa</h2>
      <ul>
        {this.state.participantMatchingToDisplay}
      </ul>
    </div>
  );
  }
}

export default SecretSantaComponent;
