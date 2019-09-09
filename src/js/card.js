import React from 'react';
import '../assets/styles/card.css'
function Card(props){
  return(
    <div className="card">
      <div className="header">{props.repo.name}</div>
    </div>
  )
}


export default Card;
