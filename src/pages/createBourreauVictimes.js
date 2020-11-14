import { Component } from "react"; 
import OneDraw from '../components/oneDraw'
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
class BourreauVictimesCreation extends Component {
    state = {
      people: [
        {name: 'robin1', mail: 'rob@rob.com'},
        {name: 'robin2', mail: 'rob@rob.com'},
        {name: 'robin3', mail: 'rob@rob.com'},
        {name: 'robin4', mail: 'rob@rob.com'}

      ], 
      name: '',
      mail: '', 
      shuffled_list: []
  }
  removePerson(ix)
  {
    this.state.people.splice(ix, 1)
    this.setState({people: this.state.people, shuffled_list: []})

  }
  renderVisitors()
  {
  return this.state.people.map((e, ix) =>  <li key={ix}> {e.name}, {e.mail}  <button onClick={() => this.removePerson(ix)}> DELETE </button> </li>)
  }
  onChange(e)
  {
    let new_state = {}
    new_state[e.target.name] = e.target.value
    this.setState(new_state)
  }

  renderBoureauVictimes()
  {
    let to_process = this.state.shuffled_list ;
    return to_process.map((val, ix) => 
    <OneDraw key={ix} ix={ix} offer={to_process[ix]} receiver={to_process[(ix + 1) % to_process.length]}/>
    )
  }

  handleDrawBourreauVictime()
  {
    let people = [...this.state.people]
    shuffleArray(people)
    console.log(people)
    this.setState({shuffled_list: people})
  }


  handleSubmit(e)
  {
    let people = {name: this.state.name, mail: this.state.mail}
    if (true) // (emailIsValid(this.state.mail)) TODO: during the test phase we do not check for valid mail
    {
    this.setState({people: [...this.state.people, people], name: '', mail: '', shuffled_list: []})
    }
    else
    {
      alert('invalid mail')
    }
  }
  render() {
  return (
    <div>
      <form>
        <label>Name: 
        <input type="text" name="name" onChange={(e) => this.onChange(e)} value={this.state.name}/>
        </label>
        <label>Mail: 
        <input type="text" name="mail" onChange={(e) => this.onChange(e)} value={this.state.mail}/>
        </label>
      </form>
      <button onClick={(e) => this.handleSubmit(e)} disabled={(!this.state.name)}> Submit </button>
      <ul>
      {this.renderVisitors()}
      </ul>
      <button onClick={() => this.handleDrawBourreauVictime()}> Draw a secret santa </button>
      <ul>
        {this.renderBoureauVictimes()}
      </ul>
    </div>
  );
  }
}

export default BourreauVictimesCreation;
