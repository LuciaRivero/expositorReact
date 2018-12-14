import React, { Component } from 'react';
//import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FormExpositores from './FormExpositores';

class Router extends Component {
    

    render() { 
        return (
            <BrowserRouter> 
                <div>    
                    
                    <Switch>
                        <Route exact path="/Expositores" render= { () => {
                        return (
                            <FormExpositores    
                            />
                            )
                        }}/>
                    </Switch>
                </div>       
        </BrowserRouter>
        );
    }
}
 
export default Router;
