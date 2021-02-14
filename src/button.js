import { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props)

        this.state = {
            label: null,
            id: this.props.id
        }
    }

    render() {
        return(
            <button style={{border:'1px solid #00186f', padding: 10, backgroundColor:'#2f3e9e', color:'#ffffff'}}>
                {this.props.id === 1 || this.props.id === 2? "Small": "Big"} 
            </button>
        )
    }
}

export default Button;