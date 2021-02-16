import {Component} from 'react'

class Box extends Component {
    render() {
        console.log('----->box render')
        return (
            <div style={{border:'1px solid #255d00', margin:5, padding:5}}>
                {this.props.children}
            </div>
        )
    }
}

export default Box;