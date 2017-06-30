import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//Components
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

//Pages
import Index from '../Pages/Index';
import About from '../Pages/About';

class Layout extends React.Component{
    render(){
        return(
            <div className="layout">
                <Nav />
                <Header />
                <Router>
                    <div>
                        <div className="innerPage">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                        </div>
                        <Route exact path="/" component={Index}/>
                        <Route path="/about" component={About}/>
                    </div>
                </Router>
                <hr/>
                <Footer />
            </div>
        )
    }
}

export default Layout;