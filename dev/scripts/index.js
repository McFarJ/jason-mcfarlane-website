const $ = require ('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Wallpaper from './wallpaper';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import { Button1, Button2, Button3 } from './svgs';
import { Cookie as Cookie1, Cookie as Cookie2, Cookie as Cookie3 } from './svgs'

const textToEnlighten = ['.enlightenment-toggle__text', '.nav__title-main', '.nav__title-sub', '.nav__secret-letter', '.nav__secret-letter-functional', '.nav__menu-option-text', '.about-page__bio', '.skills__title', '.skills__icon', '.skills__name', '.about-page__seeds-img', '.bio__hidden-code', '.bio__hidden-cap', '.bio__hidden-special', '.item__icon', '.text__main', '.github-p', '.enlightenment-directions', '.text__title-toggle', '.contact-enlightenment-toggle__wrapper', '.contact-enlightenment-toggle']

let     prevBgSeedNum = null,
        currBgSeedNum = null,
        currentBgSeed = 0,
        prevFgSeedNum = null,
        currFgSeedNum = null,
        currentFgSeed = 0
function bgSeedSelector(){
    while(prevBgSeedNum === currBgSeedNum){
        currBgSeedNum = Math.floor(Math.random() * 75) + 1;
    }
    prevBgSeedNum = currBgSeedNum;
    currentBgSeed = `bg-seed${currBgSeedNum}`
}
function fgSeedSelector(){
    while(prevFgSeedNum === currFgSeedNum){
        currFgSeedNum = Math.floor(Math.random() * 3) + 1;
    }
    prevFgSeedNum = currFgSeedNum;
    currentFgSeed = `fg-seed${currFgSeedNum}`
}

function enlightenment(){
    textToEnlighten.forEach(function(x){
        let newClass = x.replace(/\./, "")
        let insertPoint = x.length -1;
        $(x).addClass([newClass.slice(0, insertPoint), '_enlightened', newClass.slice(insertPoint)].join(''))
        if ($('.fg-seed').length > 0) {
            $('.fg-seed').addClass('notransition')
            $('.fg-seed').css('fill', 'hsla(100,100%,100%,1)')
            $('.fg-seed')[0].focus()
            $('.fg-seed').removeClass('notransition')
        }
    })
}

function unenlightenment(){
    $('[class$="_enlightened"]').each(function(index,item){
        $(this).removeClass($(this).attr('class').match(/\S+_enlightened\b/));
        $('[class$="_enlightened"]').each(function(index,item){
            $(this).removeClass($(this).attr('class').match(/\S+_enlightened\b/))
        });
        $('[class$="_enlightened"]').each(function(index,item){
            $(this).removeClass($(this).attr('class').match(/\S+_enlightened\b/))
        });
    })
    $('.nav__cookie-opened').css('display', 'none')
    $('.fortune').css('display', 'none')
    $('.fortune__text').css('display', 'none')
    $('.nav__thanks').css('display', 'none')
    $('.fortune__text_told').css('display', 'none')
    $('.nav__menu-option').css('pointer-events', 'auto')
    $('.game-over-menu-option-image').css('display', 'block')
    $('.game-over-menu-option-text').css('display', 'block')
    $('.about-page__seeds-img_visible-on-mobile').removeClass('about-page__seeds-img_visible-on-mobile')
    $('.nav__secret-letter_enlightened').removeClass('nav__secret-letter_enlightened')
    if ($('.fg-seed').length > 0) {
        $('.fg-seed').addClass('notransition')
        $('.fg-seed').css('fill', 'hsla(0,0%,0%,1)')
        $('.fg-seed')[0].focus()
        $('.fg-seed').removeClass('notransition')
    }
}

class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            enlightened: false,
            gameOver: false,
            fortuneTold: false,
            cookie1Open: false,
            cookie2Open: false,
            cookie3Open: false
        }

        this.colorSeeds = this.colorSeeds.bind(this);
        this.handleEnlightenClick = this.handleEnlightenClick.bind(this);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        this.handleSecretLetterClick = this.handleSecretLetterClick.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
        this.setOpenCookie = this.setOpenCookie.bind(this);
        this.setFortuneTold = this.setFortuneTold.bind(this);
    }

    colorSeeds(){
        let thisVar = this;
        setInterval(function () {
            $(`.${currentBgSeed}`).css({'fill': 'hsla(0,0%,50%,1)'})
            if (thisVar.state.enlightened){
                $(`.${currentFgSeed}`).css({'fill': 'hsla(360,100%,100%,1)'})
            }
            else if (!thisVar.state.enlightened){
                $(`.${currentFgSeed}`).css({'fill': 'hsla(0,0%,0%,1)'})
            }
            bgSeedSelector()
            fgSeedSelector()
            $(`.${currentBgSeed}`).css({'fill': 'hsla(339.6,49.5%,39.6%,1)'})
            $(`.${currentFgSeed}`).css({'fill': 'hsla(339.6,49.5%,39.6%,1)'})
        }, 5000);
    }

    handleEnlightenClick(){
        if ($('.enlightenment-toggle__checkbox').prop('checked')){
            $('.enlightenment-toggle__checkbox').prop('checked', false);
            this.setState({enlightened: false});
            unenlightenment();
            $('.wallpaper').removeClass('wallpaper_enlightened');
            $('.button-foreground_enlightened').removeClass('button-foreground_enlightened')
            this.setState({gameOver: false})
            $('html').css('background-color', 'hsla(100,100%,100%,1)')
        }
        else {
            $('.enlightenment-toggle__checkbox').prop('checked', true);
            this.setState({enlightened: true});
            enlightenment();
            $('.wallpaper').addClass('wallpaper_enlightened');
            $('.button-foreground').addClass('button-foreground_enlightened')
            $('html').css('background-color', 'hsla(0,0%,0%,1)')
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
        $('.nav__cookie').addClass('nav__cookie_enlightened')
        $('.nav__winning-cookie').css('display', 'block')
        $('.nav__secret-letter-functional_enlightened').removeClass('nav__secret-letter-functional_enlightened')
        this.setState({gameOver: true})
        $('.menu-options__about').css({'-webkit-filter': 'drop-shadow(0 0 0 hsla(151,50%,31%,0))', 'filter': 'drop-shadow(0 0 0 hsla(151,50%,31%,0))', 'transition': '0.5s'})
        $('.about-page__seeds-img').addClass('about-page__seeds-img_visible-on-mobile')
        $('.game-over-menu-option-image').css('display', 'none')
        $('.game-over-menu-option-text').css('display', 'none')
        if(this.state.fortuneTold){
            $('.fortune').css('display', 'block')
            $('.fortune__text_told').css('display', 'block')
            $('.nav__thanks').css('display', 'block')
            $('.nav__menu-option').css('pointer-events', 'none')
        }
    }

    handleNavClick(e){
        if(this.state.gameOver){e.preventDefault()}
    }

    setOpenCookie(cookieNumber){
        const stateCookieVar = `cookie${cookieNumber}Open`
        this.setState({[stateCookieVar]: true})
    }

    setFortuneTold(){
        this.setState({fortuneTold: true})
    }

    componentDidMount(){
        this.colorSeeds();
        $('.loading-overlay').hide();
        $('.nav__button1').click();
    }

    render(){
        return(
            <Router>
                <div className="wrapper">
                    <div className="page-content">
                        <div className="enlightenment-toggle__wrapper">
                            <a className="enlightenment-toggle" onClick={e => this.handleEnlightenClick(e)}>
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
                                        <NavLink to="/about/" className="nav__menu-option menu-options__about" onClick={this.handleNavClick} activeStyle={{'-webkit-filter': 'drop-shadow(0 0 0.25vw hsla(33,50%,45%,1))', 'filter': 'drop-shadow(0 0 0.25vw hsla(33,50%,45%,1))', 'transition': '0.5s'}}>
                                            <Cookie1 cookieNumber="1" setOpenCookie={this.setOpenCookie} setFortuneTold={this.setFortuneTold}/>
                                            <Button1 enlightened={this.state.enlightened} />
                                            <h2 className="nav__menu-option-text nav__button1">about</h2> 
                                        </NavLink>
                                        <NavLink to="/portfolio/" className="nav__menu-option menu-options__portfolio" onClick={this.handleNavClick} activeStyle={{'-webkit-filter': 'drop-shadow(0 0 0.25vw hsla(151,50%,31%,1))', 'filter': 'drop-shadow(0 0 0.25vw hsla(151,50%,31%,1))', 'transition': '0.5s'}}>
                                            <Cookie2 cookieNumber="2" setOpenCookie={this.setOpenCookie} setFortuneTold={this.setFortuneTold}/>
                                            <Button2 enlightened={this.state.enlightened} />
                                            <h2 className="nav__menu-option-text">portfolio</h2> 
                                        </NavLink>
                                        <NavLink to="/contact/" className="nav__menu-option menu-options__contact" onClick={this.handleNavClick} activeStyle={{'-webkit-filter': 'drop-shadow(0 0 0.25vw hsla(237,40%,33%,1))', 'filter': 'drop-shadow(0 0 0.25vw hsla(237,40%,33%,1))', 'transition': '0.5s'}}>
                                            <Cookie3 cookieNumber="3" setOpenCookie={this.setOpenCookie} setFortuneTold={this.setFortuneTold}/>
                                            <Button3 enlightened={this.state.enlightened} />
                                            <h2 className="nav__menu-option-text">contact</h2> 
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="fortune-wrapper">
                            <div className="fortune fortune_hidden">
                                <p className="fortune__text fortune__text_hidden fortune__text1">The pursuit of happiness ends in misery.</p>
                                <p className="fortune__text fortune__text_hidden fortune__text2"><span className="fortune__text_italic">The truth</span> is the conspiracy theory with the most pragmatic value.</p>
                                <p className="fortune__text fortune__text_hidden fortune__text3">You may live to see man-made horrors beyond your comprehension.</p>
                            </div>
                            <div className="nav__thanks-wrapper">
                                <p className="nav__thanks">Thanks for playing...</p>
                            </div>
                        </div>
                        </div>
                        <Route path="/about/" render={(props) => <About {...props} enlightened={this.state.enlightened} enlightenment={enlightenment} gameOver={this.state.gameOver} fortuneTold={this.state.fortuneTold} />} />
                        <Route path="/portfolio/" render={(props) => <Portfolio {...props} enlightened={this.state.enlightened} enlightenment={enlightenment} />} />
                        <Route path="/contact/" render={(props) => <Contact {...props} enlightened={this.state.enlightened} handleEnlightenClick={this.handleEnlightenClick} />} />
                    </div>
                    <div className="wallpaper">
                        <Wallpaper />
                    </div>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Nav/>,document.getElementById('app'));