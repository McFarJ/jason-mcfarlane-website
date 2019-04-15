import React from 'react';

// is the clickable area on the secret-letter big enough?

export default class Nav extends React.Component{
    render(){
        return(
            <div className="nav">
                <div className="nav__title-wrapper">
                    <div className="nav__title">
                        <h1 className="nav__title-main">Jason McFarlan<a className="nav__secret-letter">e</a></h1>
                        <h2 className="nav__title-sub">for web development</h2>
                    </div>
                </div>
                <div className="nav__menu-options-wrapper">
                    <div className="nav__menu-options">
                        <a className="nav__menu-option menu-options__about" href="#">
                            <img className="nav__menu-option-image menu-options__about-image" src="./images/button1.png" />
                            <h2 className="nav__menu-option-text">about</h2> 
                        </a>
                    </div>
                    <div className="nav__menu-options">
                        <a className="nav__menu-option menu-options__portfolio" href="#">
                            <img className="nav__menu-option-image menu-options__portfolio-image" src="./images/button2.png" />
                            <h2 className="nav__menu-option-text">portfolio</h2> 
                        </a>
                    </div>
                    <div className="nav__menu-options">
                        <a className="nav__menu-option menu-options__contact" href="#">
                            <img className="nav__menu-option-image menu-options__contact-image" src="./images/button3.png" />
                            <h2 className="nav__menu-option-text">contact</h2> 
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}