import Link from 'next/link';
import React, { Component } from 'react';
import {RichText} from 'prismic-reactjs';


export class ScrollItem extends Component {

        constructor(props){
            super(props);
            this.state = {item : {info : this.props.item, displayed : true } };
        }
    

        getStyle = () => {
            return{
                display : this.state.item.displayed ?
                'flex' : 'none'
            }
        }

        extendScrollItem = (id) => {
            let newDisplay = !this.state.item.displayed
            this.setState({item : {displayed: newDisplay}});
            console.log(id)
            console.log(this.state.item.displayed)
            console.log(newDisplay)
        }
       
        
        render(){

            const {displayed} = this.state.item.displayed

            return(
            
            <div>{this.props.item.map(items=>
                <div className='scrollitem'>
                    
                    <button onClick={this.extendScrollItem.bind(this, items.id)}>
                    <h1>{items.Title}</h1></button><p>{items.Text}</p><p2 style={this.getStyle()}>{items.test}</p2>
                </div>)} 
           


            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    height: auto;
                    width:75vw;
                    align-items: start;
                    padding-left: 2vw;
                    
                }

                div.scrollitem {
                    display:flex;
                    align-self: flex-start;
                    top: 0%;
                    min-height: 15vh;
                    max-height: auto;
                    border-style: solid;
                    margin-top: 2vh;
                    background-color: #333;
                    padding-right: 2vw;
                }

                h1 {
                    color: #0d6f9c;

                }

                p   {
                    border-style: solid;
                    display: inline;
                    color: whitesmoke;
                }
                

            `}</style>
            </div>
            )
        }
}


export default ScrollItem;