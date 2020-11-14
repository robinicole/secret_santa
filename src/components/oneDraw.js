import { Component } from "react"; 
let SUCCESS = 'SUCCESS'
let CLICK_TO_REVEAL =  'Click to reveal'
class OneDraw extends Component {
    state = {
        'name_displayed':CLICK_TO_REVEAL
    }
    handleClick()
    {
        if (this.state.name_displayed === CLICK_TO_REVEAL)
        {
            this.setState({'name_displayed': `${this.props.receiver.name} click to hide`})
            return SUCCESS
        }
        else
        {
            this.setState({'name_displayed': CLICK_TO_REVEAL })
        }
    }
    render()
    {
        return (
            <li key={this.props.ix}>
                {this.props.offer.name} Gives a gift to 
                 <button key={`button_victime_${this.props.ix}`} onClick={() => this.handleClick()}> {this.state.name_displayed} </button>
            </li>
        )
    }
}
export default OneDraw;
