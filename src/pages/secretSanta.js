import { Component } from "react"; 
import OneParticipantMatching from '../components/oneParticipantMatching'
import OneParticipant from '../components/oneParticipant'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
      shufflingIndices: [],
  }
  removeParticipant(ix)
  {
    this.state.participants.splice(ix, 1)
    this.setState({participants: this.state.participants, shufflingIndices:[]})

  }
  onParticipantInputChange(e)
  {
    let new_state = {}
    new_state[e.target.name] = e.target.value
    this.setState(new_state)
  }
  renderParticipant(ix, tot)
  {
    let i_receiver = this.state.shufflingIndices[(ix + 1)% tot] ; 
    let i_offer = this.state.shufflingIndices[ix] ; 
    let offer = this.state.participants[i_offer]
    let receiver = this.state.participants[i_receiver]
    return <OneParticipantMatching key={ix} ix={ix} offer={offer} receiver={receiver}/>
    
  }
  renderSecretSantaDraw()
  {
    return this.state.shufflingIndices.map(
      (val, ix) => this.renderParticipant(ix, this.state.participants.length)
    )
  }

  handleDrawSecretSanta()
  {
    let participants = [...this.state.participants]
    let permutation = [...Array(participants.length).keys()];
    shuffleArray(permutation)
    this.setState({shufflingIndices: permutation})
  }


  handleSubmit(e)
  {
    let people = {name: this.state.name, mail: this.state.mail}
    if (true) // (emailIsValid(this.state.mail)) TODO: during the test phase we do not check for valid mail
    {
    this.setState({
      participants: [...this.state.participants, people],
      name: '',
      mail: '',
      shufflingIndices: []})
    }
    else
    {
      alert('invalid mail')
    }
  }
  render() {
  return (
    <div>
      <Card >
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
            Add a new participant
        </Typography>
      <form>
        <TextField label="Name" type="text" name="name" onChange={(e) => this.onParticipantInputChange(e)} value={this.state.name}/>
        <br/>
        <TextField label="Mail"type="text" name="mail" onChange={(e) => this.onParticipantInputChange(e)} value={this.state.mail}/>
        <br/>
      </form>
      <br/>
      <Button onClick={(e) => this.handleSubmit(e)} disabled={(!this.state.name)} variant="contained" color="primary"> Submit </Button> 

      </CardContent>
    </Card>

      {/* TODO: add a check that the mail of the user is empty here */}
      <Card >
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      List of participants
        </Typography>
      <List>
      {this.state.participants.map(
        (e, ix) =>  
        <OneParticipant key={ix} mail={e.mail} name={e.name} removeParticipant={() => this.removeParticipant(ix)}/>
      )
      }
      </List>
      <Button onClick={() => this.handleDrawSecretSanta()}> Draw a secret santa </Button>
      </CardContent>
      </Card> 
      <Card >
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      Our list of secret santa
        </Typography>
      <List>
        {this.renderSecretSantaDraw()}
      </List>
      </CardContent>
      </Card>
    </div>
  );
  }
}

export default SecretSantaComponent;
