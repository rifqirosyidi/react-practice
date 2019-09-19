import React, {Component} from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import Counter from './components/Counter';
import Header from './components/Header';


class App extends Component {

  state = {
    isVisible: true
  }

  render(){
    return(
      <div className="App">
        <div className={this.state.isVisible ? "visible" : "hidden"}>
          <Counter />
        </div>
        <button 
            onClick={ () => {
              this.setState({ isVisible: !this.state.isVisible});
            }}
          >Toggle</button>
      </div>
    )
  }
}

export default App;
