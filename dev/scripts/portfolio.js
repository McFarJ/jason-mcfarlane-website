import React from 'react';

export default class Portfolio extends React.Component{
    componentDidMount(){
        if(this.props.enlightened){
            $('.item__icon').addClass('item__icon_enlightened')
            $('.text__main').addClass('text__main_enlightened')
            $('.enlightenment-directions').addClass('enlightenment-directions_enlightened')
            $('.item__icon').addClass('item__icon_enlightened')
            $('.github-p').addClass('github-p_enlightened')
        }
    }

    componentWillUnmount(){
        $('.item__icon_enlightened').removeClass('item__icon_enlightened')
        $('.text__main_enlightened').removeClass('text__main_enlightened')
        $('.enlightenment-directions_enlightened').removeClass('enlightenment-directions_enlightened')
    }

    render(){
        return(
            <div className="portfolio__wrapper">
                <ul className="portfolio">

                    <li className="portfolio__item-wrapper">
                        <div className="portfolio__item">
                            <a className="item__icon-wrapper-href" href="#">
                                <img className="item__icon" src='/images/beard-map-icon.png' />
                            </a>
                            <div className="portfolio__text-wrapper">
                                <p className="enlightenment-directions">SWITCH</p>
                                <a className="text__main" href="#">
                                    <h3 className="text__title">Beard Map- web app</h3>
                                    <p className="text__details">React, Firebase</p>
                                </a>
                                <a className="text__github" href="#">
                                    <p className="github-p"><span className="text__github_plain">or &nbsp;</span>view on GitHub</p>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="portfolio__item-wrapper">
                        <div className="portfolio__item">
                            <a className="item__icon-wrapper-href">
                                <img className="item__icon" src="/images/mind-unwind-icon.png" />
                            </a>
                            <div className="portfolio__text-wrapper">
                                <p className="enlightenment-directions">SECTION</p>
                                <a className="text__main" href="#">
                                    <h3 className="text__title">Mind Unwind- web app</h3>
                                    <p className="text__details">JavaScript, jQuery</p>
                                </a>
                                <a className="text__github" href="#">
                                    <p className="github-p"><span className="text__github_plain">or &nbsp;</span>view on GitHub</p>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="portfolio__item-wrapper">
                        <div className="portfolio__item">
                            <a className="item__icon-wrapper-href" href="#">
                                <img className="item__icon" src="/images/coursea-icon.png" />
                            </a>
                            <div className="portfolio__text-wrapper">
                                <p className="enlightenment-directions">TO</p>
                                <a className="text__main" href="#">
                                    <h3 className="text__title">One-page responsive website</h3>
                                    <p className="text__details">JavaScript, CSS</p>
                                </a>
                                <a className="text__github" href="#">
                                    <p className="github-p"><span className="text__github_plain">or &nbsp;</span>view on GitHub</p>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="portfolio__item-wrapper">
                        <div className="portfolio__item">
                            <a className="item__icon-wrapper-href" href="#">
                                <img className="item__icon" src="/images/pfm-icon.png" />
                            </a>
                            <div className="portfolio__text-wrapper">
                                <p className="enlightenment-directions">ABOUT</p>
                                <a className="text__main" href="#">
                                    <h3 className="text__title">Basic desktop website</h3>
                                    <p className="text__details">HTML, CSS</p>
                                </a>
                                <a className="text__github" href="#">
                                    <p className="github-p"><span className="text__github_plain">or &nbsp;</span>view on GitHub</p>
                                </a>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        )
    }

}