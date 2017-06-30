import React from 'react';
import { Switch, Route } from 'react-router-dom'

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
                    <div className="innerPage">
                        <Route path="/" component={Index} />
                        <Route path="/about" component={About} />
                    </div>
                </Router>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route path='/about' component={About}/>
                </Switch>
                <hr/>
                <Footer />
            </div>
        )
    }
}

export default Layout;