import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const Routing = () =>{
return(
<div>
<BrowserRouter>
<Header/>
<Route exact path="/" component={Home}/>
<Route path="/Login" component={Login}/>
<Route path="/Signup" component={Signup}/>
</BrowserRouter>
</div>
)
}
export default Routing;