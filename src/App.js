import React, {Component} from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import Counter from './components/Counter';
import Header from './components/Header';


class App extends Component {

  state = {
    isVisible: true,
    whichComponentToShow: "ImageSlider"
  }

  render(){
    if (this.state.whichComponentToShow === "ImageSlider") {
      return(
        <div>
          <ImageSlider />
          <button 
            onClick={ () => {
              this.setState({ whichComponentToShow: "Counter"});
            }}
          >Counter</button>
        </div>
      )
    } else if (this.state.whichComponentToShow === "Counter") {
      return(
        <div>
          <Counter />
          <button 
            onClick={() => {
              this.setState({ whichComponentToShow: "Header"});
            }}
          >Header</button>
        </div>
      )
    } else if (this.state.whichComponentToShow === "Header") {
      return(
        <div>
          <Header />
        </div>
      )
    
    }
  }
}

export default App;
