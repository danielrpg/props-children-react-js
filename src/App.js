import { Component } from 'react';
import './App.css';
import Box from './box';
import Picture from './picture'
import Button from './button'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pictures: [
        {id: 1, src: 'http://via.placeholder.com/200x100', alt:'small'},
        {id: 2, src: 'http://via.placeholder.com/200x100', alt:'medium'},
        {id: 3, src: 'http://via.placeholder.com/400x200', alt:'big'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h4> Props Children </h4>
        <Box> This is another example of props</Box>
        {
          this.state.pictures.map(picture => {
            return (
              <Picture key={picture.id} src={picture.src} alt={picture.alt}>
                <Button
                  id={picture.id}
                />
              </Picture>
            )
          })
        }
      
      </div>
    )
  }
}

export default App;
