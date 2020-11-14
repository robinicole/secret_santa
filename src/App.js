import { Component, Fragment} from "react"; 
import BourreauVictimesCreation from './pages/createBourreauVictimes'

class App extends Component {
  render() {
    return (
      <Fragment>
    <h1> Secret Santa</h1>
    <BourreauVictimesCreation/>
    </Fragment>
    )
  }
}

export default App;
