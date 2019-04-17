import React from 'react';

export default class Contact extends React.Component{
    render(){
        return(
            <div className="contact__wrapper">
                <ul className="contact">

                    <li className="contact__item-wrapper">
                        <div className="contact__item">
                            <a className="item__icon-wrapper" href="#">
                                <img className="item__icon" src="/images/beard-map-icon.png" />
                            </a>
                            <div className="contact__text-wrapper">
                                <p className="enlightenment-directions enlightenment-directions_hidden">SWITCH</p>
                                <a className="text__main" href="#">
                                    <h3 className="text__title">Phone</h3>
                                    <p className="text__details">React, Firebase</p>
                                </a>
                                <a className="text__github" href="#">
                                    <p>view on github</p>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="contact__item-wrapper">
                        <div className="contact__item">
                            <a className="item__icon-wrapper" href="#">
                                <img className="item__icon" src="/images/mind-unwind-icon.png" />
                            </a>
                            <div className="contact__text-wrapper">
                                <p className="enlightenment-directions enlightenment-directions_hidden">SECTION</p>
                                <a className="text__main">
                                    <h3 className="text__title">Email</h3>
                                    <p className="text__details">JavaScript, jQuery</p>
                                </a>
                                <a className="text__github">
                                    <p>view on github</p>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="contact__item-wrapper">
                        <div className="contact__item">
                            <a className="item__icon-wrapper" href="#">
                                <img className="item__icon" src="/images/coursea-icon.png" />
                            </a>
                            <div className="contact__text-wrapper">
                                <p className="enlightenment-directions enlightenment-directions_hidden">TO</p>
                                <a className="text__main">
                                    <h3 className="text__title">GitHub</h3>
                                    <p className="text__details">JavaScript, CSS</p>
                                </a>
                                <a className="text__github">
                                    <p>view on github</p>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="contact__item-wrapper">
                        <div className="contact__item">
                            <a className="item__icon-wrapper" href="#">
                                <img className="item__icon" src="/images/pfm-icon.png" />
                            </a>
                            <div className="contact__text-wrapper">
                                <p className="enlightenment-directions enlightenment-directions_hidden">ABOUT</p>
                                <a className="text__main">
                                    <h3 className="text__title">Basic desktop website</h3>
                                    <p className="text__details">HTML, CSS</p>
                                </a>
                                <a className="text__github">
                                    <p>view on github</p>
                                </a>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        )
    }

}