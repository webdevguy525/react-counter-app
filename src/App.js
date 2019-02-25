import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props){
    super();
    console.log('APP-COnstructor');
  }

  componentDidMount(){
    console.log('APP-Mounted');
  }

  render() {
    console.log('render');
    return ( 
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c =>c.value > 0).length}/>
      <main className = "container" > 
        <Counters 
        counters={this.state.counters}
        onDelete={this.handleDelete}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
     ></Counters>
      </main>
      </React.Fragment>
    );
  }
    handleDelete = counterId => {
      console.log("event handler called", counterId);
      const counter = this.state.counters.filter(c => c.id !== counterId);
      this.setState({
        counters: counter
      });
    };
    handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {
        ...counter
      };
      counters[index].value++;
      console.log(this.state.counters[0]);
      this.setState({
        counters
      });
    };
    handleReset = () => {
      const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
      });
      this.setState({
        counters
      });
    };
}

export default App;