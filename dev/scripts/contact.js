import React from 'react';

export default class Contact extends React.Component{
    constructor(props){
        super(props)

        // this.handleClick = this.handleClick.bind(this)
    }

    render(){
        return(
            <div className="contact__wrapper">
                <ul className="contact">

                    <li className="contact__item-wrapper">
                        <div className="contact__item">
                            <a className="item__icon-wrapper-href" href="#">
                                <img className="item__icon" src="/images/phone-icon.png" />
                            </a>
                            <div className="contact__text-wrapper">
                                <p className="enlightenment-directions enlightenment-directions_hidden">SWITCH</p>
                                <a className="text__main" href="#">
                                    <h3 className="text__title">Phone</h3>
                                    <p className="text__details">289-289-2890</p>
                                </a>
                                {/* <a className="text__github" href="#">
                                    <p>view on github</p>
                                </a> */}
                            </div>
                        </div>
                    </li>

                    <li className="contact__item-wrapper">
                        <div className="contact__item">
                            <a className="item__icon-wrapper-href" href="#">
                                <img className="item__icon" src="/images/email-icon.png" />
                            </a>
                            <div className="contact__text-wrapper">
                                <p className="enlightenment-directions enlightenment-directions_hidden">SECTION</p>
                                <a className="text__main" href="#">
                                    <h3 className="text__title">Email</h3>
                                    <p className="text__details">jasonpsmcfarlane@gmail.com</p>
                                </a>
                                {/* <a className="text__github">
                                    <p>view on github</p>
                                </a> */}
                            </div>
                        </div>
                    </li>

                    <li className="contact__item-wrapper">
                        <div className="contact__item">
                            <a className="item__icon-wrapper-href" href="#">
                                <img className="item__icon" src="/images/github-icon.png" />
                            </a>
                            <div className="contact__text-wrapper">
                                <p className="enlightenment-directions enlightenment-directions_hidden">TO</p>
                                <a className="text__main" href="#">
                                    <h3 className="text__title">GitHub</h3>
                                    <p className="text__details">github.com/McFarJ</p>
                                </a>
                                {/* <a className="text__github">
                                    <p>view on github</p>
                                </a> */}
                            </div>
                        </div>
                    </li>

                    <li className="contact__item-wrapper">
                        <a className="contact__item contact-enlightenment-toggle" href="#" onClick={this.props.handleEnlightenClick}>
                            <div className="item__icon-wrapper-plain">
                                <img className="item__icon" src="/images/question-icon.png" />
                            </div>
                            <div className="contact__text-wrapper">
                                <p className="enlightenment-directions enlightenment-directions_hidden">ABOUT</p>
                                    <h3 className="text__title">Did you try</h3>
                                    {/* <p className="text__details">HTML, CSS</p> */}
                                    <div className="contact-enlightenment-toggle__wrapper">
                                    <input className="contact-enlightenment-toggle__checkbox" type="checkbox" data-group="enlighten-checkboxes" />
                                    <h4 className="contact-enlightenment-toggle__text">Enlightenment mode</h4>
                                    </div>
                                    </div>
                            </a>
                    </li>

                </ul>
            </div>
        )
    }

}