import React, {Component} from 'react';
import '../assets/styles/search.css'
import Repos from './repo';

class App extends Component{
  render(){
    return(
      <div className="App">
      <Repos/>
      </div>
    )
  }
}


export default App;
