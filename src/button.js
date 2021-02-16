import { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props)

        this.state = {
            label: this.props.name,
            id: this.props.id
        }
    }

    buttonLabel(src) {
        console.log(src)
        src.includes('200x100')
        ? this.setState({label:'Small'})
        : this.setState({label:'Big'})

    }

    componentDidMount() {
        console.log('--> componentDidMount')
        this.buttonLabel(this.props.pictureSrc)
    }

    render() {
        console.log('----->button render')
        return(
            <button 
                style={{border:'1px solid #00186f', padding: 10, backgroundColor:'#2f3e9e', color:'#ffffff'}}
                onClick={() => this.props.setCurrentIdPicture(this.props.id)}
            >
                {this.state.label}
            </button>
        )
    }
}

export default Button;