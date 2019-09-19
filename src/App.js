import React, {Component} from 'react';
import './App.css';
import Counter from './components/Counter';


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
