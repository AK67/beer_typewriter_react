import React, { Component } from 'react';
import Blog from './blog';
import '../stylesheet/blogs.css';
class Blogs extends Component{

    render(){
        return(
            <div class="row blogs">
            <Blog title={"Sherlocking the hype"}
             content={"Finding relevant and interesting items according to the preferences of each user has become an important challenge in the era of Big Data. Recommender systems have emerged in response to this problem. Collaborative Filtering (CF) is one of the most successful recommender systems used by several big online shopping companies. However, CF is computationally demanding, especially in Big Data context, where the number of users and items are too big to be effectively processed by traditional approaches."}> </Blog>
             
             </div>
        );
    }
}

export default Blogs