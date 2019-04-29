import React from 'react';

export default class Contact extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(this.props.enlightened){
            $('.text__title-toggle').addClass('text__title-toggle_enlightened')
            $('.contact-enlightenment-toggle__wrapper').addClass('contact-enlightenment-toggle__wrapper_enlightened')
            $('.enlightenment-directions').addClass('enlightenment-directions_enlightened')
            $('.item__icon').addClass('item__icon_enlightened')
            $('.text__main').addClass('text__main_enlightened')
            $('.text__title-toggle').addClass('text__title-toggle_enlightened')
            $('.contact-enlightenment-toggle__text').addClass('contact-enlightenment-toggle__text_enlightened')
            $('.contact-enlightenment-toggle').addClass('contact-enlightenment-toggle_enlightened')
        }
    }

    componentWillUnmount(){
        $('.text__title-toggle_enlightened').removeClass('text__title-toggle_enlightened')
        $('.contact-enlightenment-toggle__wrapper_enlightened').removeClass('contact-enlightenment-toggle__wrapper_enlightened')
        $('.enlightenment-directions_enlightened').removeClass('enlightenment-directions_enlightened')
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
                                <p className="enlightenment-directions">SWITCH</p>
                                <a className="text__main" href="#">
                                    <h3 className="text__title">Phone</h3>
                                    <p className="text__details">289-289-2890</p>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="contact__item-wrapper">
                        <div className="contact__item">
                            <a className="item__icon-wrapper-href" href="#">
                                <img className="item__icon" src="/images/email-icon.png" />
                            </a>
                            <div className="contact__text-wrapper">
                                <p className="enlightenment-directions">SECTION</p>
                                <a className="text__main" href="#">
                                    <h3 className="text__title">Email</h3>
                                    <p className="text__details">jasonpsmcfarlane@gmail.com</p>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="contact__item-wrapper">
                        <div className="contact__item">
                            <a className="item__icon-wrapper-href" href="#">
                                <img className="item__icon" src="/images/github-icon.png" />
                            </a>
                            <div className="contact__text-wrapper">
                                <p className="enlightenment-directions">TO</p>
                                <a className="text__main" href="#">
                                    <h3 className="text__title">GitHub</h3>
                                    <p className="text__details">github.com/McFarJ</p>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="contact__item-wrapper">
                        <a className="contact__item contact-enlightenment-toggle" href="#" onClick={this.props.handleEnlightenClick}>
                            <div className="item__icon-wrapper-plain">
                                <img className="item__icon" src="/images/question-icon.png" />
                            </div>
                            <div className="contact__text-wrapper">
                                <p className="enlightenment-directions">ABOUT</p>
                                <h3 className="text__title text__title-toggle">Did you try</h3>
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