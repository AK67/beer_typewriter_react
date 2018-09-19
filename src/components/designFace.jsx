import React, { Component } from 'react';
import Header from './header';
import Blogs from './blogs';
class DesignFace extends Component{

    
    render(){
        return(
            <div class="container-fluid"> 
            <Header/>
            <Blogs/>
            </div>
    );
    }
}
export default DesignFace;