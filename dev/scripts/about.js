import React from 'react';

export default class About extends React.Component{
    render(){
        return(
            <div className="about-page__wrapper">
                <div className="about-page">
                    <p className="about-page__bio">Recovering actor. Studied web develo<span className="bio__hidden-code">p</span>ment at Hacke<span className="bio__hidden-code">r</span>You in Toronto. Curr<span className="bio__hidden-code">e</span>nt related intere<span className="bio__hidden-code">s</span>t<span className="bio__hidden-code">s</span> include bl<span className="bio__hidden-code">o</span>ckchai<span className="bio__hidden-code">n</span>, GraphQL, Adobe, and OBS.  Curren<span className="bio__hidden-code">t</span> unrelated interests include swimming, straig<span className="bio__hidden-code">h</span>t razors, calisth<span className="bio__hidden-code">e</span>tics, and gr<span className="bio__hidden-code">e</span>asy hair-styling products.</p>
                    <img src="/images/svgs/dandelion-seeds.svg" />
                    <div className="about-page__skills-wrapper">
                        <div className="about-page__skills-section">
                            <h2 className="skills__title">Skills:</h2>
                            <ul className="skills__list">
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i class="fab fa-react"></i>
                                    </div>
                                    <p className="skills__name">React</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i class="fab fa-react"></i>
                                    </div>
                                    <p className="skills__name">JSON</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i class="fab fa-react"></i>
                                    </div>
                                    <p className="skills__name">CSS</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i class="fab fa-react"></i>
                                    </div>
                                    <p className="skills__name">Node.js</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i class="fab fa-react"></i>
                                    </div>
                                    <p className="skills__name">HTML</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i class="fab fa-react"></i>
                                    </div>
                                    <p className="skills__name">NPM</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i class="fab fa-react"></i>
                                    </div>
                                    <p className="skills__name">JavaScript</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i class="fab fa-react"></i>
                                    </div>
                                    <p className="skills__name">Git</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i class="fab fa-react"></i>
                                    </div>
                                    <p className="skills__name">Gulp</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i class="fab fa-react"></i>
                                    </div>
                                    <p className="skills__name">Firebase</p>
                                </li>
                                <li className="skills__skill">
                                    <div className="skills__icon-wrapper">
                                        <i class="fab fa-react"></i>
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