import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header className="intro-header" style={{backgroundImage: 'url("img/home-bg.jpg")'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div className="site-heading">
                                <h1>Clean Blog</h1>
                                <hr className="small"/>
                                <span className="subheading">A Clean Blog Theme by Start Bootstrap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;