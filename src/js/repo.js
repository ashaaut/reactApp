import React, {Component} from 'react';
import Search from './search'
import RepoList from './RepoList';
class Repos extends Component {
    constructor(props){
      super(props);
      this.state = {
        repos: []
      };
    }
    
    handleSearch = (user) =>{
        let url = 'https://api.github.com/users/'+user+'/repos';
        fetch(url).then(response => response.json()).then((repos) => {
        this.setState({
          repos: repos
        });
      });
    };
    
    render(){
      return (
        <div className="repos">
          <Search handleSubmit={this.handleSearch} />
          <RepoList repos={this.state.repos}/>
        </div>
      )
    }
  }
  
  export default Repos