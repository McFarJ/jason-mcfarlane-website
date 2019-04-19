const $ = require ('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import Wallpaper from './wallpaper.js';
import About from './about.js';
import Portfolio from './portfolio.js';
import Contact from './contact.js';
import { Button1 } from './svgs.js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

alert('working!')

// $(document).on('change', 'input[type="checkbox"][data-group]', function(event) {
//     // The checkbox that was clicked
//     var actor = $(this);
//     // The status of that checkbox
//     var checked = actor.prop('checked');
//     // The group that checkbox is in
//     var group = actor.data('group');
//     // All checkboxes of that group
//     var checkboxes = $('input[type="checkbox"][data-group="' + group + '"]');
//     // All checkboxes excluding the one that was clicked
//     var otherCheckboxes = checkboxes.not(actor);
//     // Check those checkboxes
//     otherCheckboxes.prop('checked', checked);
//   });

const textToEnlighten = ['.enlightenment-toggle__text', '.nav__title-main', '.nav__title-sub', '.nav__secret-letter', '.about-page__bio', '.skills__title', '.skills__icon', '.skills__name']

function enlightenment(){
    textToEnlighten.forEach(function(x){
        let newClass = x.replace(/\./, "")
        let insertPoint = x.length -1;
        $(x).addClass([newClass.slice(0, insertPoint), '_enlightened', newClass.slice(insertPoint)].join(''))
    })
}

function unenlightenment(){
    return;
}

class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            enlightened: false
        }

        this.handleEnlightenClick = this.handleEnlightenClick.bind(this);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    }

    handleEnlightenClick(){
        console.log('running handleEnlightenClick')

        if ($('.enlightenment-toggle__checkbox').prop('checked')){
            $('.enlightenment-toggle__checkbox').prop('checked', false);
            this.setState({enlightened: false});
            unenlightenment();
            $('.wallpaper').removeClass('wallpaper_enlightened');
            $('.button-foreground_enlightened').removeClass('button-foreground_enlightened')
        }
        else {
            $('.enlightenment-toggle__checkbox').prop('checked', true);
            this.setState({enlightened: true});
            enlightenment();
            $('.wallpaper').addClass('wallpaper_enlightened');
            $('.button-foreground').addClass('button-foreground_enlightened')
        }
        return;
    }

    handleCheckboxClick(){
        if ($('.enlightenment-toggle__checkbox').prop('checked')){
            $('.enlightenment-toggle__checkbox').prop('checked', false);
        }
        else {
            $('.enlightenment-toggle__checkbox').prop('checked', true);
        }
        return;
    }

    render(){

        return(
            <Router>
                <div>
                    <div className="wallpaper">
                        <Wallpaper />
                    </div>
                    <div className="page-content">
                        <div className="enlightenment-toggle__wrapper">
                            <a className="enlightenment-toggle" onClick={this.handleEnlightenClick}>
                                <input className="enlightenment-toggle__checkbox" type="checkbox" data-group="enlighten-checkboxes" onClick={this.handleCheckboxClick} />
                                <h4 className="enlightenment-toggle__text">Enlightenment mode</h4>
                            </a>
                        </div>
                        <div className="nav__wrapper">
                            <div className="nav">
                                <div className="nav__title-wrapper">
                                    <div className="nav__title">
                                        <h1 className="nav__title-main">Jason McFarlan<a className="nav__secret-letter" href="#">e</a></h1>
                                        <h2 className="nav__title-sub">for web development</h2>
                                    </div>
                                </div>
                                <div className="nav__menu-options-wrapper">
                                    <div className="nav__menu-options">
                                        <NavLink to="/about/" className="nav__menu-option menu-options__about" activeStyle={{borderBottom: 'solid 3px black', paddingBottom: '1em'}}>
                                            <Button1 enlightened={this.state.enlightened} />
                                            <h2 className="nav__menu-option-text">about</h2> 
                                        </NavLink>
                                        <NavLink to="/portfolio/" className="nav__menu-option menu-options__portfolio" href="#">
                                            <svg className="nav__menu-option-image" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 508 508" xmlSpace="preserve">
                                            <g>
                                                <path className="button2-background" d="M437.5,139.9c-16.8-3.9-32.1-12.5-44.7-25.1c-12.2-12.1-20.7-27.4-24.6-44.2C356.7,21.8,302.6,0,254,0
                                                    S151.3,21.8,139.9,70.5c-4,16.8-12.5,32.1-25.2,44.8C102.6,127.5,87.3,136,70.5,140C21.8,151.3,0,205.5,0,254
                                                    c0,48.6,21.8,102.7,70.5,114.1c16.8,3.9,32.1,12.5,44.7,25.1c12.2,12.1,20.7,27.4,24.6,44.2C151.3,486.2,205.4,508,254,508l0,0
                                                    c48.6,0,102.7-21.8,114.1-70.5c4-16.8,12.5-32.1,25.1-44.7c12.1-12.2,27.4-20.7,44.2-24.6C486.2,356.7,508,302.6,508,254
                                                    S486.2,151.3,437.5,139.9
                                                    M254,155.7c13.6,0,24.6,11,24.6,24.6s-11,24.6-24.6,24.6s-24.6-11-24.6-24.6S240.4,155.7,254,155.7z
                                                    M254,352.3c-13.6,0-24.6-11-24.6-24.6s11-24.6,24.6-24.6s24.6,11,24.6,24.6S267.6,352.3,254,352.3z
                                                    M327.7,278.6c-13.6,0-24.6-11-24.6-24.6s11-24.6,24.6-24.6s24.6,11,24.6,24.6C352.3,267.6,341.3,278.6,327.7,278.6z
                                                    M180.3,278.6c-13.6,0-24.6-11-24.6-24.6s11-24.6,24.6-24.6s24.6,11,24.6,24.6C204.8,267.6,193.8,278.6,180.3,278.6z"/>
                                                <path className="button-foreground" d="M437.5,139.9c-16.8-3.9-32.1-12.5-44.7-25.1c-12.2-12.1-20.7-27.4-24.6-44.2C356.7,21.8,302.6,0,254,0
                                                    S151.3,21.8,139.9,70.5c-4,16.8-12.5,32.1-25.2,44.8C102.6,127.5,87.3,136,70.5,140C21.8,151.3,0,205.5,0,254
                                                    c0,48.6,21.8,102.7,70.5,114.1c16.8,3.9,32.1,12.5,44.7,25.1c12.2,12.1,20.7,27.4,24.6,44.2C151.3,486.2,205.4,508,254,508l0,0
                                                    c48.6,0,102.7-21.8,114.1-70.5c4-16.8,12.5-32.1,25.1-44.7c12.1-12.2,27.4-20.7,44.2-24.6C486.2,356.7,508,302.6,508,254
                                                    S486.2,151.3,437.5,139.9z M433.8,352.2c-19.8,4.6-37.8,14.7-52.6,29.5c-14.3,14.3-24.4,32.3-29,52.1c-9.4,40-56.1,57.9-98.2,57.9
                                                    l0,0c-42.1,0-88.8-17.9-98.2-57.9c-4.6-19.8-14.7-37.8-29.5-52.6c-14.3-14.3-32.3-24.4-52.1-29c-40-9.4-57.9-56.1-57.9-98.2
                                                    s17.9-88.8,57.8-98.2c19.8-4.7,37.8-14.7,52.6-29.5c14.3-14.3,24.4-32.3,29-52.1c9.4-40,56.1-57.8,98.2-57.8s88.8,17.9,98.2,57.9
                                                    c4.7,19.8,14.7,37.8,29.5,52.6c14.3,14.3,32.3,24.4,52.1,29c40,9.4,57.9,56.1,57.9,98.2C491.6,296.1,473.7,342.8,433.8,352.2z"/>
                                                <path className="button-foreground" d="M437.5,139.9c-16.8-3.9-32.1-12.5-44.7-25.1c-12.2-12.1-20.7-27.4-24.6-44.2C356.7,21.8,302.6,0,254,0
                                                    S151.3,21.8,139.9,70.5c-4,16.8-12.5,32.1-25.2,44.8C102.6,127.5,87.3,136,70.5,140C21.8,151.3,0,205.5,0,254
                                                    c0,48.6,21.8,102.7,70.5,114.1c16.8,3.9,32.1,12.5,44.7,25.1c12.2,12.1,20.7,27.4,24.6,44.2C151.3,486.2,205.4,508,254,508l0,0
                                                    c48.6,0,102.7-21.8,114.1-70.5c4-16.8,12.5-32.1,25.1-44.7c12.1-12.2,27.4-20.7,44.2-24.6C486.2,356.7,508,302.6,508,254
                                                    S486.2,151.3,437.5,139.9z M433.8,352.2c-19.8,4.6-37.8,14.7-52.6,29.5c-14.3,14.3-24.4,32.3-29,52.1c-9.4,40-56.1,57.9-98.2,57.9
                                                    l0,0c-42.1,0-88.8-17.9-98.2-57.9c-4.6-19.8-14.7-37.8-29.5-52.6c-14.3-14.3-32.3-24.4-52.1-29c-40-9.4-57.9-56.1-57.9-98.2
                                                    s17.9-88.8,57.8-98.2c19.8-4.7,37.8-14.7,52.6-29.5c14.3-14.3,24.4-32.3,29-52.1c9.4-40,56.1-57.8,98.2-57.8s88.8,17.9,98.2,57.9
                                                    c4.7,19.8,14.7,37.8,29.5,52.6c14.3,14.3,32.3,24.4,52.1,29c40,9.4,57.9,56.1,57.9,98.2C491.6,296.1,473.7,342.8,433.8,352.2z"/>
                                                <path className="button-foreground" d="M180.3,213c-22.6,0-41,18.4-41,41s18.4,41,41,41s41-18.4,41-41C221.2,231.4,202.8,213,180.3,213z M180.3,278.6
                                                    c-13.6,0-24.6-11-24.6-24.6s11-24.6,24.6-24.6s24.6,11,24.6,24.6C204.8,267.6,193.8,278.6,180.3,278.6z"/>
                                                <path className="button-foreground" d="M327.7,213c-22.6,0-41,18.4-41,41s18.4,41,41,41s41-18.4,41-41S350.3,213,327.7,213z M327.7,278.6
                                                    c-13.6,0-24.6-11-24.6-24.6s11-24.6,24.6-24.6s24.6,11,24.6,24.6C352.3,267.6,341.3,278.6,327.7,278.6z"/>
                                                <path className="button-foreground" d="M254,221.2c22.6,0,41-18.4,41-41s-18.4-41-41-41s-41,18.4-41,41S231.4,221.2,254,221.2z M254,155.7
                                                    c13.6,0,24.6,11,24.6,24.6s-11,24.6-24.6,24.6s-24.6-11-24.6-24.6S240.4,155.7,254,155.7z"/>
                                                <path className="button-foreground" d="M254,286.8c-22.6,0-41,18.4-41,41s18.4,41,41,41s41-18.4,41-41C295,305.2,276.6,286.8,254,286.8z M254,352.3
                                                    c-13.6,0-24.6-11-24.6-24.6s11-24.6,24.6-24.6s24.6,11,24.6,24.6S267.6,352.3,254,352.3z"/>
                                            </g>
                                            </svg>
                                            <h2 className="nav__menu-option-text">portfolio</h2> 
                                        </NavLink>
                                        <NavLink to="/contact/" className="nav__menu-option menu-options__contact" href="#">
                                            <svg className="nav__menu-option-image" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 508 508" xmlSpace="preserve">
                                            <g>
                                                <path className="button3-background" d="M254,0C113.9,0,0,113.9,0,254s113.9,254,254,254s254-113.9,254-254S394.1,0,254,0z 
                                                M196.6,278.6c-13.6,0-24.6-11-24.6-24.6s11-24.6,24.6-24.6s24.6,11,24.6,24.6C221.2,267.6,210.2,278.6,196.6,278.6z
                                                M311.4,278.6c-13.6,0-24.6-11-24.6-24.6s11-24.6,24.6-24.6s24.6,11,24.6,24.6C335.9,267.6,324.9,278.6,311.4,278.6z"/>
                                                <path className="button-foreground" d="M254,0C113.9,0,0,113.9,0,254s113.9,254,254,254s254-113.9,254-254S394.1,0,254,0z M254,491.6C123,491.6,16.4,385,16.4,254
                                                    S123,16.4,254,16.4S491.6,123,491.6,254S385,491.6,254,491.6z"/>
                                                <path className="button-foreground" d="M254,65.5C150.1,65.5,65.5,150.1,65.5,254S150.1,442.4,254,442.4S442.5,357.9,442.5,254S357.9,65.5,254,65.5z M254,426.1
                                                    c-94.9,0-172.1-77.2-172.1-172.1S159.1,81.9,254,81.9S426.1,159.1,426.1,254S348.9,426.1,254,426.1z"/>
                                                <path className="button-foreground" d="M196.6,213c-22.6,0-41,18.4-41,41s18.4,41,41,41s41-18.4,41-41S219.2,213,196.6,213z M196.6,278.6
                                                    c-13.6,0-24.6-11-24.6-24.6s11-24.6,24.6-24.6s24.6,11,24.6,24.6C221.2,267.6,210.2,278.6,196.6,278.6z"/>
                                                <path className="button-foreground" d="M311.4,213c-22.6,0-41,18.4-41,41s18.4,41,41,41s41-18.4,41-41S333.9,213,311.4,213z M311.4,278.6
                                                    c-13.6,0-24.6-11-24.6-24.6s11-24.6,24.6-24.6s24.6,11,24.6,24.6C335.9,267.6,324.9,278.6,311.4,278.6z"/>
                                            </g>
                                            </svg>
                                            <h2 className="nav__menu-option-text">contact</h2> 
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Route path="/about/" render={(props) => <About {...props} enlightened={this.state.enlightened} enlightenment={enlightenment} />} />
                        <Route path="/portfolio/" component={Portfolio} />
                        <Route path="/contact/" render={(props) => <Contact {...props} handleEnlightenClick={this.handleEnlightenClick} />} />
                    </div>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Nav/>,document.getElementById('app'));


$(document).ready(function(){
    $('.loading-overlay').hide();
})