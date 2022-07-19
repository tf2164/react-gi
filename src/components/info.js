import React from 'react';
import './info.css'
import {Component} from 'react'

class info extends Component{
  render(){
  return (
    <div className='Info'>   
      <h3>{this.state.name}</h3>
      <p>Age: {this.props.age}</p>
      <p>D.O.B: {this.props.birthdate}</p>
      <p>Number: {this.props.number}</p>
    </div>
  );
}
}

export default info;
