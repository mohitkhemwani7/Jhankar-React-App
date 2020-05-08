import React, {Component} from 'react';
import "./landingPage.css";
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import {Button, Jumbotron} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Real from '../../assets/Realtime.png';
import Health from '../../assets/Healthy.png';
import Operate from '../../assets/Operation.png';
import Efriend from '../../assets/Earth.png';
// import Partners from "../Partners/partners";
import Tick from '../../assets/tick.svg';
import Particles from 'react-particles-js';
import ScrollAnimation from 'react-animate-on-scroll';
import {myConfig as config} from "../../config";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class LandingPage extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        subject: "",
        loading: false
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    handleClick = (e) => {
        const {name, email, message, subject} = this.state;

        this.setState({loading: true});
        if (name && email && message && subject) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, email, message, subject})
            };

            fetch(`${config.apiUrl}/contactus/`, requestOptions)
                .then(function (response) {
                    if (response.status === 202) {
                        console.log("submitted successfully");
                        toast.success("Successfully Submitted !");
                    } else {
                        console.log("request failed");
                        toast.error("There was an error, Please Submit again!");

                    }
                }).then(resp => {
                this.setState({loading: false})
            });
        } else {
            console.log("fill out all fields");
            toast.warn("Please Fill all the fields");
            setTimeout(() => {
                this.setState({loading: false});
            }, 1000);
        }

    };


    render() {
        const {name, email, subject, message} = this.state;
        const {loading} = this.state;
        return <React.Fragment>
            <Particles className="particles-landing-page" params={
                {
                    particles:
                        {
                            number:
                                {
                                    value: 10,
                                    density:
                                        {enable: true, value_area: 900}
                                },
                            color: {value: "#0019ff"},
                            shape: {
                                type: "circle", stroke: {width: 0, color: "black"},
                                polygon: {"nb_sides": 5}
                            },
                            line_linked: {
                                "enable": true,
                            },
                            size: {
                                value: 15,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 10,

                                }
                            }
                        },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "grab"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 1800,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 800,
                                size: 80,
                                duration: 2,
                                opacity: 0.8,
                                speed: 3
                            },
                            repulse: {
                                distance: 400,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    }
                }

            }/>
            <Header/>
            <Jumbotron id="jmb1" className="jumbotron-landing-page">
                <div className="banner-message">
                    <ScrollAnimation animateIn='fadeInUp'
                    >
                        <h1 className="banner-main-text">All types of Electronics and Electricals Available</h1>
                        <h1 className="banner-main-text">-Increase Visibility and Control</h1>
                    </ScrollAnimation>
                    <br/><br/>
                    <ScrollAnimation delay={1000}
                                     initiallyVisible={true}>
                        <p className="banner-description">State of art suite of products & A
                            <br/>vision to transform the way you buy Electronic Products.
                            <br/>Experience the future of <br/>Electronics now.</p>
                    </ScrollAnimation>
                    <Button variant={"outline-dark"} className="schedule-button"
                            href="#contact-us">Get In Touch</Button>
                    <Button variant={"success"} className="shop-button"
                            href="/category">Shop Now</Button>
                </div>
            </Jumbotron>
            <div className="core-strengths">
                <ScrollAnimation animateIn='slideInUp' animateOnce={true}
                >
                    <h3>CORE STRENGTHS</h3>
                </ScrollAnimation>
            </div>
            <Jumbotron className="realtime jumbotron-landing-page">
                <Container>
                    <Row>
                        <Col className="realtime-analytics-col">
                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}
                            >
                                <h3 className="general-heading">Realtime Analytics Dashboard</h3>
                                <p className="description">The goal is to turn data into information, and
                                    information into insight. Centralized Customer Intelligence makes sure the
                                    system
                                    remains Transparent as well dedicated for Customers</p>
                            </ScrollAnimation>
                        </Col>
                        <Col>
                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                                <Image src={Real} rounded alt="realtime analysis image"/>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Jumbotron className="healthy jumbotron-landing-page">
                <Container>
                    <Row>
                        <Col className="Hcolimg">
                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}
                            >
                                <Image src={Health} rounded alt="Healthy Lifestyle image"/>
                            </ScrollAnimation>
                        </Col>
                        <Col className="health-col">
                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}
                            >
                                <h3 className="general-heading">Healthy Lifestyle</h3>
                                <p className="description">Good health is not something we can buy. However, it can
                                    be an extremely valuable savings account, A team of Dietician and Food experts
                                    make sure what you consume never hurts your health</p>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Jumbotron className="operation jumbotron-landing-page">
                <Container>
                    <Row>
                        <Col className="operation-col">
                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}
                            >
                                <h3 className="general-heading">Operation Expertise</h3>
                                <p className="description">A team of dedicated,Highly qualified Experts ensure
                                    Smooth Operations.24x7 Support availability</p>
                            </ScrollAnimation>
                        </Col>
                        <Col>
                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}
                            >
                                <Image className="rounded" src={Operate} alt="Operation expertise image"/>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Jumbotron className="earth jumbotron-landing-page">
                <Container>
                    <Row>
                        <Col className="earth-friendly-col-img">
                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                                <Image src={Efriend} rounded alt="Earth friendly image"/>
                            </ScrollAnimation>
                        </Col>
                        <Col className="earth-friendly-col">
                            <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                                <h3 className="general-heading">Earth friendly</h3>
                                <p className="description">The environment is where we all meet; where we all have a
                                    mutual interest; it is the one thing all of us share. DoorMonk has pledged to
                                    give back more than what we use</p>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Jumbotron className="area jumbotron-landing-page">
                <div className="grid-container">
                    <div className="area-of-expertise-col grid-item">
                        <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
                            <h3 className="expertise-heading">Areas of Expertise</h3>

                        </ScrollAnimation>
                    </div>

                    <div className="area-of-expertise-col2 grid-item">
                        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}
                        >
                            <div className="grid-container-content">
                                <div className="grid-content-tick">
                                    <Image src={Tick} className="tick "/>
                                </div>
                                <div className="grid-content-text">
                                    Corporate cafeterias
                                </div>
                                <div className="grid-content-tick">
                                    <Image src={Tick} className="tick "/>
                                </div>
                                <div className="grid-content-text">
                                    Hospital Catering
                                </div>
                                <div className="grid-content-tick">
                                    <Image src={Tick} className="tick "/>
                                </div>
                                <div className="grid-content-text">
                                    College Mess and Cafeteria
                                </div>
                                <div className="grid-content-tick">
                                    <Image src={Tick} className="tick "/>
                                </div>
                                <div className="grid-content-text">
                                    Events Catering
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                </div>
            </Jumbotron>
            <Jumbotron id="contact-us">
                <section className="mb-4 get-in-touch-container">

                    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p className="text-center w-responsive mx-auto mb-5"></p>

                    <div className="row">

                        <div className="col-md-9 form">
                            <form id="contact-form" name="contact-form">

                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label htmlFor="name" className="">Your name</label>
                                            <input type="text" id="name" name="name" className="form-control"
                                                   value={name} onChange={this.handleChange}/>

                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label htmlFor="email" className="">Your email</label>
                                            <input type="text" id="email" name="email" className="form-control"
                                                   value={email} onChange={this.handleChange}/>

                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <label htmlFor="subject" className="">Subject</label>

                                            <input type="text" id="subject" name="subject" className="form-control"
                                                   value={subject} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <label htmlFor="message">Your message</label>
                                            <textarea id="message" name="message" rows="2"
                                                      className="form-control md-textarea" value={message}
                                                      onChange={this.handleChange}
                                            />

                                        </div>

                                    </div>
                                </div>

                            </form>
                            <br/>
                            <div className="text-center text-md-left">
                                <Button variant={"outline-dark"} size={"lg"} className="contact-us-submit"
                                        disabled={loading}
                                        onClick={this.handleClick}>
                                    {loading && (
                                        <i
                                            className="fa fa-refresh fa-spin"
                                            style={{marginRight: "5px"}}
                                        />
                                    )}
                                    {loading && <span>Sending Message</span>}
                                    {!loading && <span>Send</span>}
                                </Button><ToastContainer/>

                            </div>
                            <div className="status"></div>
                        </div>
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fa fa-phone mt-4 fa-2x"></i>
                                    <p>+ 91 9850479391</p>
                                </li>

                                <li><i className="fa fa-envelope mt-4 fa-2x"></i>
                                    <p>services@jhankar.in</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>
            </Jumbotron>
            {/*<div>*/}
            {/*    <Partners/>*/}
            {/*</div>*/}

            <div>
                <Footer/>
            </div>
        </React.Fragment>;
    }
}

export default LandingPage;
