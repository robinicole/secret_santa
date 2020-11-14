import { Component, Fragment} from "react"; 
import SecretSantaComponent from './pages/secretSanta'

class App extends Component {
  render() {
    return (
      <Fragment>
    <h1> Secret Santa</h1>
    <SecretSantaComponent/>
    </Fragment>
    )
  }
}

export default App;
