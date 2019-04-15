const $ = require ('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import Wallpaper from './wallpaper.js'
import About from './about.js'
const historyApiFallback = require('connect-history-api-fallback'); //are this and the corresponding package (and Gulp modification) necessary? they're supposed to 'make sure our URL always points towards our app', whatever that means.

//testtest
alert('working!')
console.log('working!')

class Nav extends React.Component{
    render(){
        return(
            <div>
                <Wallpaper className="wallpaper__dandelion" />
                <div className="page-content">
                    <div className="enlightenment-toggle__wrapper">
                        <a className="enlightenment-toggle" onClick={this.handleEnlightenClick}>
                            <input className="enlightement-toggle__checkbox" type="checkbox" />
                            <h4 className="enlightenment-toggle__text">Enlightenment mode</h4>
                        </a>
                    </div>
                    <div className="nav__wrapper">
                        <div className="nav">
                            <div className="nav__title-wrapper">
                                <div className="nav__title">
                                    <h1 className="nav__title-main">Jason McFarlan<a className="nav__secret-letter" href="#">e</a></h1>
                                    <h2 className="nav__title-sub">for web developmenttt</h2>
                                </div>
                            </div>
                            <div className="nav__menu-options-wrapper">
                                <div className="nav__menu-options">
                                    
                                    <a className="nav__menu-option menu-options__about" href="#">
                                        <svg className="nav__menu-option-image" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 508 508" xmlSpace="preserve">
                                        <g>
                                            <path className="button1-background" d="M401.5,0h-295C47.8,0,0,47.8,0,106.5v295C0,460.2,47.8,508,106.5,508h295c58.7,0,106.5-47.8,106.5-106.5v-295C508,47.8,460.2,0,401.5,0z
                                                M188.5,221.2c-18.1,0-32.8-14.7-32.8-32.8s14.7-32.8,32.8-32.8s32.8,14.7,32.8,32.8S206.5,221.2,188.5,221.2z
                                                M319.5,221.2c-18.1,0-32.8-14.7-32.8-32.8s14.7-32.8,32.8-32.8c18.1,0,32.8,14.7,32.8,32.8S337.6,221.2,319.5,221.2z
                                                M188.5,352.3c-18.1,0-32.8-14.7-32.8-32.8c0-18.1,14.7-32.8,32.8-32.8s32.8,14.7,32.8,32.8C221.2,337.6,206.5,352.3,188.5,352.3z
                                                M319.5,352.3c-18.1,0-32.8-14.7-32.8-32.8c0-18.1,14.7-32.8,32.8-32.8c18.1,0,32.8,14.7,32.8,32.8C352.3,337.6,337.6,352.3,319.5,352.3z"/>
                                            <path className="button-foreground" d="M401.5,0h-295C47.8,0,0,47.8,0,106.5v295C0,460.2,47.8,508,106.5,508h295c58.7,0,106.5-47.8,106.5-106.5v-295
                                                C508,47.8,460.2,0,401.5,0z M491.6,401.5c0,49.7-40.4,90.1-90.1,90.1h-295c-49.7,0-90.1-40.4-90.1-90.1v-295
                                                c0-49.7,40.4-90.1,90.1-90.1h295c49.7,0,90.1,40.4,90.1,90.1V401.5z"/>
                                            <path className="button-foreground" d="M401.5,49.2h-295c-31.6,0-57.4,25.7-57.4,57.4v295c0,31.6,25.7,57.4,57.4,57.4h295c31.6,0,57.4-25.7,57.4-57.4v-295
                                                C458.8,74.9,433.1,49.2,401.5,49.2z M442.5,401.5c0,22.6-18.4,41-41,41h-295c-22.6,0-41-18.4-41-41v-295c0-22.6,18.4-41,41-41h295
                                                c22.6,0,41,18.4,41,41V401.5z"/>
                                            <path className="button-foreground w" d="M188.5,139.3c-27.1,0-49.2,22.1-49.2,49.2s22.1,49.2,49.2,49.2s49.2-22.1,49.2-49.2S215.6,139.3,188.5,139.3z M188.5,221.2
                                                c-18.1,0-32.8-14.7-32.8-32.8s14.7-32.8,32.8-32.8s32.8,14.7,32.8,32.8S206.5,221.2,188.5,221.2z"/>
                                            <path className="button-foreground y" d="M319.5,139.3c-27.1,0-49.2,22.1-49.2,49.2s22.1,49.2,49.2,49.2s49.2-22.1,49.2-49.2S346.7,139.3,319.5,139.3z M319.5,221.2
                                                c-18.1,0-32.8-14.7-32.8-32.8s14.7-32.8,32.8-32.8c18.1,0,32.8,14.7,32.8,32.8S337.6,221.2,319.5,221.2z"/>
                                            <path className="button-foreground x" d="M188.5,270.4c-27.1,0-49.2,22.1-49.2,49.2s22.1,49.2,49.2,49.2s49.2-22.1,49.2-49.2C237.6,292.4,215.6,270.4,188.5,270.4z
                                                M188.5,352.3c-18.1,0-32.8-14.7-32.8-32.8c0-18.1,14.7-32.8,32.8-32.8s32.8,14.7,32.8,32.8C221.2,337.6,206.5,352.3,188.5,352.3z"
                                                />
                                            <path className="button-foreground z" d="M319.5,270.4c-27.1,0-49.2,22.1-49.2,49.2s22.1,49.2,49.2,49.2s49.2-22.1,49.2-49.2C368.7,292.4,346.7,270.4,319.5,270.4z
                                                M319.5,352.3c-18.1,0-32.8-14.7-32.8-32.8c0-18.1,14.7-32.8,32.8-32.8c18.1,0,32.8,14.7,32.8,32.8
                                                C352.3,337.6,337.6,352.3,319.5,352.3z"/>
                                        </g>
                                        </svg>
                                        <h2 className="nav__menu-option-text">about</h2> 
                                    </a>
                                    <a className="nav__menu-option menu-options__portfolio" href="#">
                                        <img className="nav__menu-option-image menu-options__portfolio-image" src="./images/svgs/button2.svg" />
                                        <h2 className="nav__menu-option-text">portfolio</h2> 
                                    </a>
                                    <a className="nav__menu-option menu-options__contact" href="#">
                                        <img className="nav__menu-option-image menu-options__contact-image" src="./images/svgs/button3.svg" />
                                        <h2 className="nav__menu-option-text">contact</h2> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <About />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Nav/>,document.getElementById('app'));


$(document).ready(function(){
    $('.loading-overlay').hide();
})