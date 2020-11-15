import { Component } from "react"; 


class OneParticipant extends Component {
    render()
    {
        return (
            <li key={this.props.key}> {this.props.name}, {this.props.mail}  <button onClick={() => this.props.removeParticipant(this.props.key)}> DELETE </button> </li>
        )
    }
}
export default OneParticipant;
