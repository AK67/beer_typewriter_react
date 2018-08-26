import React, { Component } from 'react';
import '../stylesheet/header.css';
import frontImg from '../images/header/beerHead.png'
class Header extends Component{

    render()
    {
        return(
            <header>
                
                <head>
                    <title> BeerTypeWriter</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                </head>    
                <h1 class="headerH1">BeerTypeWriter</h1>
                <img src={frontImg} className="headerImg"/>
                <div class="MyNavs">
                <ul class="nav nav-tabs ">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">AboutMe</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Design</a>
                    </li>
                </ul>
                </div>
            </header>
            
        );
    }
}
export default Header