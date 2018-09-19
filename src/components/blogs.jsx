import React, { Component } from 'react';
import Blog from './blog';
class Blogs extends Component{

    render(){
        return(
            <div class="row">
            <Blog title={"Sherlocking the hype"}
             content={"React,Scala and Mongo! This blog is build on my subjects.As we all know how react and angular is on every other mouth of face you see, if you happen to be working in a IT organisation"}> </Blog>
             
             </div>
        );
    }
}

export default Blogs