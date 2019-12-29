import React, { Component } from 'react';
import Link from 'next/link';
import ScrollItems, { ScrollItem } from './scrollitems';
import Navbar from './Navbar';
import PropTypes from 'prop-types';


class Body extends Component{

  constructor(props){
    super(props);
    this.state = { item : [] , queryParam : '' };
  }

  

  componentDidMount =() =>{
  fetch('http://localhost:1337/articles' + this.state.queryParam)
  .then( result => result.json())
  .then(item => this.setState({item}))
  };

  toggleItemBoolean = (Photograhy) =>{
    console.log(Photograhy)
    console.log(this.state.queryParam)
    this.setState({queryParam : Photograhy}, ()=>{console.log(this.state.queryParam);});
    this.filterAPI();
  }

  filterAPI =() =>{
    fetch('http://localhost:1337/articles' + this.state.queryParam)
    .then( result => result.json())
    .then(item => this.setState({item}))
    };

  render(){
    return(
      <div>
  <body>
      <Navbar toggleItemBoolean = {this.toggleItemBoolean} />
      <ScrollItem  {...this.state} />
      <style jsx>{`
            display: flex;
            flex-direction: row;
            font: 100% Helvetica, sans-serif;
            color: #474747;
            background-color: #2c2c2c;
      `}</style>
      </body>
        
        
      </div>

    )
  }
}



export default Body;