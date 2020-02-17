import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';

// components
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import LoginRegister from './pages/login-register';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state={};
    }

  render()
  {
    return(
      <BrowserRouter>      
        <Route exact path="/" component={LoginRegister}/>
        <Route exact path="/home" component={Home}/>        
      </BrowserRouter>
    )
  }
}




//  export default function App() {
//    return(
//      <div>
//        <div className="flex flex-col">
//             <NavBar/>            
//             <Home/>            
//        </div>
//      </div>
       
//    );
//  }