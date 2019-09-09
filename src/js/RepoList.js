import React from 'react';
import Card from './card'
import '../assets/styles/RepoList.css'
function RepoList(props) {
    var rows = [];
    props.repos.map((repo,index) => rows.push(<Card key={index} repo={repo} />))
    return (
        <div className="repoList">
          {rows}
        </div>
    )
}
RepoList.defaultProps = {
    repos: []
};
  
export default RepoList;