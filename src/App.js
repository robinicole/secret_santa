import { Component } from "react"; 
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
class App extends Component {
    state = {
      people: [], 
      name: '',
      mail: '', 
      shuffled_list: []
  }
  removePerson(ix)
  {
    this.state.people.splice(ix, 1)
    this.setState({people: this.state.people})
  }
  renderVisitors()
  {
    return this.state.people.map((e, ix) =>  <li key={ix}> {e.name}, {e.mail}  <button onClick={() => this.removePerson(ix)}> DELETE</button> </li>)
  }
  onChange(e)
  {
    let new_state = {}
    new_state[e.target.name] = e.target.value
    this.setState(new_state)
  }
  isDisabled()
  {
    return (this.state.name.length > 0) & (this.tate.mail.length > 0)
  }
  renferBoureauVictimes()
  {
    let to_process = this.state.shuffled_list ;
    return to_process.map((val, ix) => 
    <li>
      {to_process[ix].name} Gives a gift to   {to_process[(ix + 1) % to_process.length].name} 
    </li>
    )
  }
  shufflePersons()
  {
    let people = [...this.state.people]
    shuffleArray(people)
    console.log(people)
    this.setState({shuffled_list: people})
  }


  handleSubmit(e)
  {
    let people = {name: this.state.name, mail: this.state.mail}
    if (emailIsValid(this.state.mail))
    {
    this.setState({people: [...this.state.people, people], name: '', mail: ''})
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
      <button onClick={(e) => this.handleSubmit(e)} disabled={(!this.state.name)||(!this.state.mail) }> Submit </button>
      <ul>
      {this.renderVisitors()}
      </ul>
      <button onClick={() => this.shufflePersons()}> Draw a secret santa </button>
      <ul>
        {this.renferBoureauVictimes()}
      </ul>
    </div>
  );
  }
}

export default App;
