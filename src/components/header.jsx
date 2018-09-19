import React, { Component } from 'react';
import '../stylesheet/header.css';
import frontImg from '../images/header/beerHead.png'
class Header extends Component{

    render()
    {
        return(
            <div class="header row">  
             <ul class="nav  nav-tabs nav-justified">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Design</a>
                    </li>
                </ul>
                <h1 class="headerH1">BeerTypeWriter</h1>
                <img src={frontImg} className="headerImg"/>
                <div >
               
                </div>
            </div>
            
        );
    }
}
export default Header