import React, {Component} from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import Counter from './components/Counter';


class App extends Component {

  state = {
    isVisible: true
  }

  render(){

    const buttonText = this.state.isVisible ? "Hide" : "Show"
    const slider = this.state.isVisible ? <ImageSlider /> :  <Counter initialVal={0} />

    return (
      <div className="App">
        {slider}
        <button 
          onClick={ () => {this.setState({ isVisible: !this.state.isVisible})} }
        >
          {buttonText}
        </button>
      </div>
    );  
  }
}

export default App;
