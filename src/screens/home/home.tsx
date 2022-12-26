import React from 'react';
import StyledHome from './home.style';
import { Button, Accordion } from "react-bootstrap";
import { ArrowRight, Twitter, Instagram, Facebook, Check2 } from "react-bootstrap-icons";
import logo from '../../assets/logo_dark.png';
import brain from '../../assets/brain.png';
import looperBg from '../../assets/looper_bg.png';
import cardImg1 from '../../assets/card_img_1.png';
import cardImg2 from '../../assets/card_img_2.png';
import cardImg3 from '../../assets/card_img_3.png';
import bgStroke from '../../assets/bg__stroke.png';
import services from '../../assets/service.png';
import bgService from '../../assets/bg_service.png';
import cardImg4 from '../../assets/Group 85.png';
import cardImg5 from '../../assets/Group 86.png';
import cardImg6 from '../../assets/Group 85 (1).png';
import cardImg7 from '../../assets/Group 86 (1).png';
import cardImg8 from '../../assets/Group 85 (2).png';
import cardImg9 from '../../assets/Group 86 (2).png';
import caseHeader1 from '../../assets/Group 104.png';
import caseHeader2 from '../../assets/Group 105.png';
import caseSeparator from '../../assets/Group 204.png';
import casefooter1 from '../../assets/Group 106.png';
import casefooter5 from '../../assets/Group 107.png';
import signUpPic from '../../assets/group 12.png';

export default function Home() {

    const cards = [
        {
            image: cardImg1,
            title: 'Recommendation Engine',
            description: 'Want to build a recommendation algorithm for your audience? Build one super fast!'
        },
        {
            image: cardImg2,
            title: 'Implement Fraud detection',
            description: 'Struggling with Fraud in any transactional section of your Business? Make a Fraud detection Engine now!'
        },
        {
            image: cardImg3,
            title: 'Customer Acquisition Cost',
            description: 'Not Sure on Customer acquisition costs? Predict for the future based on past data :)'
        }
    ];

    const cardTwo = [
        {
            image: cardImg4,
            title: 'Predict Sales Revenue',
            description: 'Wondering what the figures might look like for the next quarter? Let AI help you figure it out!'
        },
        {
            image: cardImg5,
            title: 'Portfolio Optimization',
            description: 'Asset management can be overwhelming. Don\'t worry, Codenull is ready to help! with asset value history it can optimize your portfolio for the best returns.'
        },
        {
            image: cardImg6,
            title: 'Logistics Cost',
            description: 'Train an AI model on past data of logistic costs and get accurate predictions on the same for future.'
        },
        {
            image: cardImg7,
            title: 'Medical Classification',
            description: 'Got past data on a disease and want to predict if a patient is suffering from it? Build an AI model to help predict.'
        },
        {
            image: cardImg8,
            title: 'Robo Advisor',
            description: 'Confused where to invest in? Make a Robo advisor that helps you purely customized to your needs.'
        },
        {
            image: cardImg9,
            title: 'Any Possible AI Use Case',
            description: 'We solve ANY possible AI use case. Yes you heard us right! ANY possible AI use case. Not sure which one suits you? Get in touch, let us help you make AI models customized for your business.'
        }
    ];

    const service = [
        {
            title: '1. Prepare Your Data',
            info: 'AI models are trained on your past data to predict the future or get recommendations.'
        },
        {
            title: '2. Train Your Ai Model',
            info: 'One step Train process to kick start AI model training on your data'
        },
        {
            title: '3. Personalize Model For You',
            info: 'Use this personalized AI model specially built for you!'
        }
    ];

    return (
        <StyledHome>
            <div className="hero__section w-100 bg-dark position-relative">
                <div className="hero__section-content col-10 mx-auto pt-30 pb-100 bg-transparent text-white d-flex justify-content-between align-items-center">
                    <div className="col-12 col-md-6">
                        <h1 className="fw-bold fs--clash-display">Codenull.ai</h1>
                        <p className="display-30 my-10 fs--clash-display text--white-60 text-nowrap">No-Code For Free AI For Business Uses Cases</p>
                        <p className="mb-16 text--white-60">Build Any AI model without writing a single line of code. Use these models for Portfolio
                            optimization, Robo-advisors, Recommendation Engines, Fraud detection and much more
                        </p>
                        <Button className="btn-primary d-flex align-items-center gap-16">
                            Try Our Beta
                            <ArrowRight color="#FFFFFF" />
                        </Button>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={brain} alt="brain" width="100%" />
                    </div>
                </div>
                <img src={looperBg} alt="background" className="position-absolute looper--bg" width="100%" height="700" />
            </div>
            <div className="w-100 position-relative">
                <img src={bgStroke} alt="" width="602" className="position-absolute start-0 left-stroke" />
                <div className="py-100 col-10 mx-auto">
                    <h2 className="text-center text-black mb-16">Our Main Service</h2>
                    <div className="br--b-dark col-1 mx-auto"></div>
                    <div className="d-flex align-items-center justify-content-center gap-50 py-74">
                        {cards.map(({ image, title, description }) => (
                            <div className="service-card px-24 py-74 bg-white text-center">
                                <img src={image} alt="icon" width="60" height="60" />
                                <h4 className="mt-40 mb-30">{title}</h4>
                                <p className="text-grey">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <img src={bgStroke} alt="" width="602" className="position-absolute end-0 right-stroke" />
            </div>
            <div className="w-100 position-relative service">
                <h2 className="text-center text-black mb-16">Leverage your business with AI</h2>
                <div className="br--b-dark col-1 mx-auto"></div>
                <div className="service__content pt-30 col-10 mx-auto d-flex justify-content-between align-items-start">
                    <div className="col-5 d-flex flex-column gap-10 mt-40">
                        {service.map(({title, info}) => (
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>{title}</Accordion.Header>
                                    <Accordion.Body>
                                        {info}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        ))}
                    </div>
                    <img src={services} alt="service" width="100%" className="col-4" />
                </div>
                <img src={bgService} alt="" width="100%" height="230" className="service__bg" />
            </div>
            <div className="w-100 bg-white py-30 position-relative my-50">
                <div className="w-100 position-absolute d-flex justify-content-between">
                    <img src={caseHeader2} alt="" width="395" />
                    <img src={caseHeader1} alt="" width="395" />
                </div>
                <div className="w-100 position-absolute case-separator">
                    <img src={caseSeparator} alt="" width="100%" height="31" />
                </div>
                <div className="w-100 position-absolute bottom-0 d-flex justify-content-between">
                    <img src={casefooter1} alt="" width="314" />
                    <img src={casefooter5} alt="" width="314" />
                </div>
                <h2 className="text-center mb-16">Other Use Cases</h2>
                <div className="br--b-dark col-1 mx-auto"></div>
                <div className="col-10 mx-auto d-flex flex-wrap align-items-center justify-content-center gap-50 mt-50 py-74">
                    {cardTwo.map(({ image, title, description }) => (
                        <div className="cases-card d-flex flex-column align-items-center p-24 text-center">
                            <img src={image} alt="icon" width="60" height="60" />
                            <h4 className="mt-40 mb-30">{title}</h4>
                            <p className="text-grey">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="auth__section py-42 w-100 my-50">
                <div className="col-10 mx-auto d-flex align-items-center justify-content-between">
                    <img src={signUpPic} alt="" width="100%" className="col-4" />
                    <div className="text-white col-7">
                        <h2>Sign Up For Our Beta Version</h2>
                        <p className="mt-10 mb-30">We guarantee you 3-months free for basic tier upon launch</p>
                        <div className="col-10 position-relative d-flex align-items-center">
                            <input type="text" className="w-100 bg-white py-20 border-0 rounded px-20" placeholder="Enter Your Email" />
                            <Button className="btn-blue auth__section-btn position-absolute">
                                Get Your Ai Model
                            </Button>
                        </div>
                        <div className="d-flex align-items-center gap-20 display-18 mt-30">
                            <p><Check2 /> Completely free</p>
                            <p><Check2 /> No Credit Card Required</p>
                            <p><Check2 /> Cancel Anytime</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 position-relative my-50">
                <div className="col-11 mx-auto py-30 d-flex align-items-center justify-content-between br--b-light">
                    <img src={logo} alt="loho" width="177" />
                    <ul className="d-flex align-items-center gap-20 display-18">
                        <li>Privacy Policy</li>
                        <li>FAQ</li>
                        <li>Terms & Condition</li>
                    </ul>
                    <div className="d-flex align-items-center gap-20">
                        <Twitter color="#5A5653" size="20px" className="cursor--pointer" />
                        <Instagram color="#5A5653" size="20px" className="cursor--pointer" />
                        <Facebook color="#5A5653" size="20px" className="cursor--pointer" />
                    </div>
                </div>
                <p className="text-center py-30">@Copyright 2022 <span className="text-primary"><a href="#">Codenull.ai</a></span></p>
            </div>
        </StyledHome>
    );
}
