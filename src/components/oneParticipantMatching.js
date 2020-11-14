import { Component } from "react"; 
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
            <li key={this.props.ix}>
                {this.props.offer.name} Gives a gift to 
                 <button key={`button_victime_${this.props.ix}`} onClick={() => this.handleClick()}> {this.state.button_value} </button>
            </li>
        )
    }
}
export default OneParticipantMatching;
