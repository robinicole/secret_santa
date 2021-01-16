import { Component } from "react"; 
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

let SUCCESS = 'SUCCESS'
let CLICK_TO_REVEAL =  'Click to reveal'
class OneParticipantMatching extends Component {
    state = {
        button_value: CLICK_TO_REVEAL
    }
    handleClick()
    {
        if (this.state.button_value === CLICK_TO_REVEAL)
        {
            this.setState({button_value: `${this.props.receiver.name} click to hide`})
            return SUCCESS
        }
        else
        {
            this.setState({button_value: CLICK_TO_REVEAL })
        }
    }
    render()
    {
        return (
            <ListItem key={this.props.ix}>
                        <ListItemAvatar>
          <Avatar>
            <CardGiftcardIcon />
          </Avatar>
        </ListItemAvatar>
                <Button>{this.props.offer.name}</Button>  &nbsp;  Gives a gift to &nbsp;&nbsp;
                 <Button key={`button_victime_${this.props.ix}`} onClick={() => this.handleClick()} variant="contained"> {this.state.button_value} </Button>
            </ListItem>
        )
    }
}
export default OneParticipantMatching;
