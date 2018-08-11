import React, { Component } from 'react';
import '../stylesheet/restingFace.css';
class RestingFace extends Component{

    render(){
        return( <html>
            <head>
            
             <title>BeerTypewriter</title>
                </head>
            
            <body>
            <div class="container">
             <div class="container__item landing-page-container">
              <div class="content__wrapper">
            
            
               <header class="header">
                <div class="menu-icon header__item">
                 <span class="menu-icon__line"></span>
                </div>
            
                <h1 class="heading header__item">BeerTypewriter</h1>
            
               </header>
            
               <p class="coords">N 49° 16' 35.173"  /  W 0° 42' 11.30"</p>
            
               <div class="ellipses-container">
            
                <h2 class="greeting">Hello, Stuff with
                 <ul>
                  <li class="stack">Scala</li>
                  <li class="stack">Play</li>
                  <li class="stack">React</li>
                  <li class="stack">Mongo </li>
                 </ul>
                 coming real soon.
                </h2>
            
                <div class="ellipses ellipses__outer--thin">
            
                 <div class="ellipses ellipses__orbit"></div>
            
                </div>
            
                <div class="ellipses ellipses__outer--thick"></div>
               </div>
            
               <div class="scroller">
                <p class="page-title">home</p>
            
                <div class="timeline">
                 <span class="timeline__unit"></span>
                 <span class="timeline__unit timeline__unit--active"></span>
                 <span class="timeline__unit"></span>
                </div>
               </div>
              </div>
            
             </div>
            
            </div>
            
            </body>
            </html>);
    }
}

export default RestingFace;