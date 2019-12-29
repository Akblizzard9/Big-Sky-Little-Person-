import Link from 'next/link';
import React, { Component } from 'react';

export class navBar extends Component {

  constructor(props){
      super(props);
      this.state = { Photography : '/?Subgroup=Photography', Tutorial:'/?Subgroup=Tutorial',  Blog:'/?Subgroup=Blog', Home: '',};
  }
  
  render(){

    const {Photography, Tutorial, Blog, Home} = this.state

      return(
      
        <div>
        <header>
        <button type='submit' onClick={this.props.toggleItemBoolean.bind(this, Home)} >Home</button>
        <button type='submit' onClick={this.props.toggleItemBoolean.bind(this, Blog)} >Blog Post</button>
        <button type='submit' onClick={this.props.toggleItemBoolean.bind(this, Tutorial)} >Tutorials</button>
        <button type='submit' onClick={this.props.toggleItemBoolean.bind(this, Photography)} >Photography</button>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/big_sky_little_person/"><img src="../../public/images/instacolor.png"></img></a>
        </header>
          <style jsx>{`
              header {
                  margin-top: 2vh;
                  margin-left: 0%;
                  display: flex;
                  flex-direction: column;
                  height: 100vh;
                  width: 15vw;
                  text-align: center;
                  background-color: #202020;
                }
              header a {
                
                padding-left: 0%;
                padding-top: 2vh;
                padding-bottom: 2vh;
                color: whitesmoke;
                text-decoration: none;
              }
              header a img {
                width: 30%;
              }
              header a:hover, header button:hover {
                text-decoration: underline;
                background-color: #333;
                color: #0d6f9c;
                outline: none;
              }
              header button{
                outline: none;
                padding-left: 0%;
                padding-top: 2vh;
                padding-bottom: 2vh;
                background-color: #202020;
                color: whitesmoke;
              }
`}</style>
</div>
)
            }
}


export default navBar;