import { Component, Fragment} from "react"; 
import SecretSantaComponent from './pages/secretSanta'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Secret Santa
          </Typography>
        </Toolbar>
      </AppBar>
    <SecretSantaComponent/>
    </Fragment>
    )
  }
}

export default App;
