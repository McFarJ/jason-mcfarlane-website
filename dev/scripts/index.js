const $ = require ('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Wallpaper from './wallpaper.js';
import About from './about.js';
import Portfolio from './portfolio.js';
import Contact from './contact.js';
import { Button1, Button2, Button3 } from './svgs.js';
import { ClosedCookie as Cookie1, ClosedCookie as Cookie2, ClosedCookie as Cookie3 } from './svgs.js'

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

const textToEnlighten = ['.enlightenment-toggle__text', '.nav__title-main', '.nav__title-sub', '.nav__secret-letter', '.nav__secret-letter-functional', '.nav__menu-option-text', '.about-page__bio', '.skills__title', '.skills__icon', '.skills__name', '.about-page__seeds-img', '.bio__hidden-code', '.bio__hidden-cap', '.bio__hidden-special', '.item__icon', '.text__main', '.enlightenment-directions', '.text__title-toggle', '.contact-enlightenment-toggle__wrapper']

function enlightenment(){
    textToEnlighten.forEach(function(x){
        let newClass = x.replace(/\./, "")
        let insertPoint = x.length -1;
        $(x).addClass([newClass.slice(0, insertPoint), '_enlightened', newClass.slice(insertPoint)].join(''))
    })
}

function unenlightenment(){
    console.log('running unenlightenment')
    console.log($('[class$="_enlightened"]'))

    // $('[class$="_enlightened"]').removeClass(this.className.match(/\S+_enlightened/)[0])


    $('[class$="_enlightened"]').each(function(index,item){
        console.log(typeof item)
        $(this).removeClass($(this).attr('class').match(/\S+_enlightened\b/))
        $('[class$="_enlightened"]').each(function(index,item){
            $(this).removeClass($(this).attr('class').match(/\S+_enlightened\b/))
        })
    })
        

}

class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            enlightened: false,
            gameOver: false
        }

        this.handleEnlightenClick = this.handleEnlightenClick.bind(this);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        this.handleSecretLetterClick = this.handleSecretLetterClick.bind(this);
    }

    handleEnlightenClick(){
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

    handleSecretLetterClick(){
        $('.about-page__bio').addClass('game-over-bio game-over-bio_enlightened')
        $('.about-page__skills-wrapper').addClass('game-over-skills-wrapper game-over-skills-wrapper_enlightened')
        $('.nav__menu-option-image').addClass('game-over-menu-option-image game-over-menu-option-image_enlightened')
        $('.nav__menu-option-text').addClass('game-over-menu-option-text game-over-menu-option-text_enlightened')
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
                                        <h1 className="nav__title-main">Jason McFarlan<a className="nav__secret-letter" href="#" onClick={this.handleSecretLetterClick}>e</a></h1>
                                        <h2 className="nav__title-sub">for web development</h2>
                                    </div>
                                </div>
                                <div className="nav__menu-options-wrapper">
                                    <div className="nav__menu-options">
                                        <NavLink to="/about/" className="nav__menu-option menu-options__about" activeStyle={{borderBottom: 'solid 3px black', paddingBottom: '1em'}}>
                                            <Cookie1 />
                                            <Button1 enlightened={this.state.enlightened} />
                                            <h2 className="nav__menu-option-text">about</h2> 
                                        </NavLink>
                                        <NavLink to="/portfolio/" className="nav__menu-option menu-options__portfolio" href="#">
                                            <Cookie2 />
                                            <Button2 enlightened={this.state.enlightened} />
                                            <h2 className="nav__menu-option-text">portfolio</h2> 
                                        </NavLink>
                                        <NavLink to="/contact/" className="nav__menu-option menu-options__contact" href="#">
                                            <Cookie3 />
                                            <Button3 enlightened={this.state.enlightened} />
                                            <h2 className="nav__menu-option-text">contact</h2> 
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Route path="/about/" render={(props) => <About {...props} enlightened={this.state.enlightened} enlightenment={enlightenment} gameOver={this.state.gameOver} />} />
                        <Route path="/portfolio/" render={(props) => <Portfolio {...props} enlightened={this.state.enlightened} enlightenment={enlightenment} />} />
                        <Route path="/contact/" render={(props) => <Contact {...props} enlightened={this.state.enlightened} handleEnlightenClick={this.handleEnlightenClick} />} />
                        <Cookie1 />
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