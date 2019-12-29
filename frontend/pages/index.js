import Link from 'next/link';
import React, { Component } from 'react';
import NavBar from '../pages/components/navbar'
import Body from '../pages/components/body'
import Head from 'next/head';


export class Index extends Component {

    constructor(props){
        super(props);
        this.state={ item : [],
    };
    }

        render(){
            return(
                <div>
                <Head>
        <title>Big Sky Little Person</title>
                </Head>
                <Body {...this.state}> 
                </Body>
                
            </div>
            )}

            }


export default Index;