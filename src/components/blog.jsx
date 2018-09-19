import React, { Component } from 'react';
import '../stylesheet/blog.css';
class Blog extends Component{
    
    render(){
        console.log(this.props)
        return(
            <div class="blog">
             <h2 class="page-header"> {this.props.title} </h2>
             <p> {this.props.content} </p>
            </div>
            
        );
    }
}

export default Blog