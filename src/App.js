import { Component } from 'react';
import './App.css';
import Box from './box';
import Picture from './picture'
import Button from './button'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentPicture: null,
      pictures: [
        {id: 1, src: 'http://via.placeholder.com/200x100', alt:'small', name:'Small'},
        {id: 2, src: 'http://via.placeholder.com/200x100', alt:'medium', name:'Medium'},
        {id: 3, src: 'http://via.placeholder.com/400x200', alt:'big', name:'Large'},
        {id: 4, src: 'http://via.placeholder.com/400x200', alt:'big', name:'XLarge'}
      ]
    }

    //this.setCurrentIdPicture = this.setCurrentIdPicture.bind(this)
  }

  setCurrentIdPicture = (id) => {
    console.log(id)
    const currentSrc = this.state.pictures.find(picture => picture.id === id).src
   // const currentSrc = this.state.pictures.find(picture => picture.id === id)
    console.info(currentSrc)
     this.setState({
       // currentPicture: this.state.currentPicture.unshift(currentSrc)
       currentPicture: currentSrc
     })

   //  console.log(this.state.currentPicture[0]);
  }

  render() {
    console.log('----->App render')
    return (
      <div className="App">
        <h4> Props Children </h4>
        <Box> 
          This is another example of props <br />
          {this.state.currentPicture 
              ? 
              <Picture src={this.state.currentPicture} alt='Default image'> 
                This the current image
              </Picture>
              : ''
          }
        </Box>
        {
          this.state.pictures.map(picture => {
            return (
              <Picture key={picture.id} src={picture.src} alt={picture.alt}>
                <Button
                  id={picture.id}
                  name={picture.name}
                  setCurrentIdPicture={this.setCurrentIdPicture}
                  pictureSrc={picture.src}
                />
                <div>
                  <strong> Detail </strong>
                  <div>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal
                  </div>
                </div>
              </Picture>
            )
          })
        }
      
      </div>
    )
  }
}

export default App;
