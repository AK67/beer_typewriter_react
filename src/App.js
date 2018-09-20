import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import RestingFace from './components/restingFace';
import AboutBeerType from './components/aboutBeerType';
import {createBrowserHistory} from 'history';
import DesignFace from './components/designFace';
const browserHistory = createBrowserHistory();

class App extends React.Component{
    render(){
        return(
           
                <Router >
                  <div>
                        <Route exact path={"/"}  component={RestingFace}/>
                        <Route exact path={"/design"} component={DesignFace}/>
                        <Route exact path={"/about"} component={AboutBeerType}/>
                    </div>
                </Router>
             
        )   
    }

}
export default App;
