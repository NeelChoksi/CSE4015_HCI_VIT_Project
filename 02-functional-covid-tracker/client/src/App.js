import React,{useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './cmps/Navbar';

import { AuthContext } from './Context/AuthContext';

import Home from './cmps/Home';
import Login from './cmps/Login';
import Register from './cmps/Register';
import Users from './cmps/Users';
import Preferences from './cmps/Preferences';
import Admin from './cmps/Admin'
import userInfo from './cmps/userInfo';

function App() { 
  return(
    <Router>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route  path="/login" component={Login}/>
        <Route  path="/register" component={Register}/>
        <Route path ="/users" component ={Users} />
        <Route path ="/preferences" component ={Preferences} />
        <Route path ="/admin" component ={Admin} />
        <Route path ="/userInfo" component ={userInfo} />



    </Router>
  
  )
    
}

export default App;
