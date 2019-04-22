import React from 'react';
import { DandelionSeeds } from './svgs.js';

export default class About extends React.Component{
    constructor(props){
        super(props)

        this.handleLetterClick = this.handleLetterClick.bind(this);
        // might not need any handleLetterClick
    }

    handleLetterClick(){
        if(!$('.about-page__bio').hasClass('about-page__bio_game-over')){
            $('.about-page__bio').addClass('about-page__bio_game-over')
            $('.about-page__skills-wrapper').addClass('about-page__skills-wrapper_game-over')
        }
    }
    
    componentDidMount(){
        $('.nav__secret-letter').addClass('nav__secret-letter-functional')
        if(this.props.enlightened){
            this.props.enlightenment()
            $('.nav__secret-letter-functional').addClass('nav__secret-letter-functional_enlightened')
            $('.game-over-bio').addClass('game-over-bio_enlightened')
            $('.game-over-skills-wrapper').addClass('game-over-skills-wrapper_enlightened')
            $('.game-over-menu-option-image').addClass('game-over-menu-option-image_enlightened')
            $('.game-over-menu-option-text').addClass('game-over-menu-option-text_enlightened')
        }
        if(this.props.gameOver){
            $('.about-page__bio').addClass('game-over-bio')
            $('.about-page__skills-wrapper').addClass('game-over-skills-wrapper')
            if(this.props.enlightened){
                $('.game-over-bio').addClass('game-over-bio_enlightened')
                $('.game-over-skills-wrapper').addClass('game-over-skills-wrapper_enlightened')
            }
        }
        return
    }

    componentWillUnmount(){
        $('.nav__secret-letter-functional').removeClass('nav__secret-letter-functional nav__secret-letter-functional_enlightened')
        $('.game-over-bio_enlightened').removeClass('game-over-bio_enlightened')
        $('.game-over-skills-wrapper_enlightened').removeClass('game-over-skills-wrapper_enlightened')
    }

    render(){
        return(
            <div className="about-page__wrapper">
                <div className="about-page">
                    <div className="about-page__bio-wrapper">
                        <p className="about-page__bio">Recovering actor. Studied web develo<span className="bio__hidden-code bio__hidden-cap">p</span>ment at Hacke<span className="bio__hidden-code">r</span>You in Toronto. Curr<span className="bio__hidden-code">e</span>nt related intere<span className="bio__hidden-code">s</span>t<span className="bio__hidden-code">s</span> include bl<span className="bio__hidden-code bio__hiden-cap">o</span>ckchai<span className="bio__hidden-code">n</span>, GraphQL, Adobe, and OBS.  Curren<span className="bio__hidden-code bio__hidden-cap">t</span> unrelated interests include swimming, straig<span className="bio__hidden-code">h</span>t razors, calisth<span className="bio__hidden-code">e</span>tics, and gr<span className="bio__hidden-code bio__hidden-special">e</span>asy hair-styling products.</p>
                        <DandelionSeeds enlightened={this.props.enlightened}/>
                    </div>
                    
                    <div className="about-page__skills-wrapper">
                        <div className="about-page__skills-section">
                            <h2 className="skills__title">Skills:</h2>
                            <ul className="skills__list">
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i className="skills__icon fab fa-react"></i>
                                    </div>
                                    <p className="skills__name">React</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i className="skills__icon fas fa-terminal"></i>
                                    </div>
                                    <p className="skills__name">jQuery</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i className="skills__icon fab fa-css3"></i>
                                    </div>
                                    <p className="skills__name">CSS</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i className="skills__icon fab fa-node"></i>
                                    </div>
                                    <p className="skills__name">Node.js</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i className="skills__icon fab fa-html5"></i>
                                    </div>
                                    <p className="skills__name">HTML</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i className="skills__icon fab fa-npm"></i>
                                    </div>
                                    <p className="skills__name">NPM</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i className="skills__icon fab fa-js"></i>
                                    </div>
                                    <p className="skills__name">JavaScript</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i className="skills__icon fab fa-github"></i>
                                    </div>
                                    <p className="skills__name">Git</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i className="skills__icon fab fa-gulp"></i>
                                    </div>
                                    <p className="skills__name">Gulp</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i className="skills__icon fab fa-hotjar"></i>
                                    </div>
                                    <p className="skills__name">Firebase</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i className="skills__icon fab fa-adobe"></i>
                                    </div>
                                    <p className="skills__name">Photoshop</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}