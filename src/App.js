import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './component/Navbar';
import { ToastContainer } from 'react-toastify';
import Home from './component/Home';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';

const App =()=> {

 

    return (
      <div>
        <Router>
        <Navbar/>
        <ToastContainer/>
            <Switch>
            <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/add'>
                <AddContact/>
              </Route>
              <Route path='/edit/:id'>
               <EditContact/>
              </Route>
            </Switch>
        </Router>
      </div>
    )
  
}

export default App;