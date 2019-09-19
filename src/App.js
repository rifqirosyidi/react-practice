import React, {Component} from 'react';
import './App.css';
import Counter from './components/Counter';


class App extends Component {

  state = {
    count: 0
  }

  BtnIncrement = () => {
      this.setState({
          count: this.state.count + 1
      })
  }

  BtnDecrement = () => {
      this.setState({
          count: this.state.count - 1
      })
  }

  render(){
    return(
      <div className="App">

        {/* So now you can have two sync components */}
        <Counter 
          count={this.state.count} 
          increment={this.BtnIncrement}
          decrement={this.BtnDecrement} 
        />

        <Counter 
          count={this.state.count} 
          increment={this.BtnIncrement}
          decrement={this.BtnDecrement} 
        />
      </div>
    )
  }
}

export default App;
