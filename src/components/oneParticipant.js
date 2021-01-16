import { Component } from "react"; 
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

class OneParticipant extends Component {
    render()
    {
        return (
             <ListItem key={this.props.key}>           
              <ListItemAvatar>
             <Avatar>
             <AccessibilityIcon />
             </Avatar> 
             </ListItemAvatar>
              {this.props.name}, {this.props.mail}  <button onClick={() => this.props.removeParticipant(this.props.key)}> DELETE </button> </ListItem>
        )
    }
}
export default OneParticipant;
