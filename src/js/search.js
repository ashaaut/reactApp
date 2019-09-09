
import React, {Component} from 'react';
import '../assets/styles/search.css';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:""
    }

  }
  handleSubmit = (event) => {
      event.preventDefault();
      const userName = event.target.userName.value;
      this.setState({name:userName})
      this.props.handleSubmit(userName);
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="search">
            <input name="userName" className="searchBox" type="text"  placeholder="Enter the userName" required/>
            <button className="searchButton">Search</button>
          </div>
        </form>
        
      );
    }
  }
   export default SearchBar;