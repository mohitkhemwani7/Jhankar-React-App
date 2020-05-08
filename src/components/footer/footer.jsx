import React, {Component} from 'react';
import './footer.css'
import {Form, Jumbotron} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {myConfig as config} from "../../config";

class Footer extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        subject: ""
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    handleClick = (e) => {
        e.preventDefault();
        const {name, email, message, subject} = this.state;
        if (name && email && message && subject) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, email, message, subject})
            };

            fetch(`${config.apiUrl}/contactus/`, requestOptions)
                .then(function (response) {
                    if (response.status !== 200) {
                        console.log("submitted successfully")
                    } else {
                        console.log("request failed")
                    }
                })
        } else {
            console.log("fill out all fields")
        }
    };

    render() {
        const {name, email, subject, message} = this.state;
        return (
            <React.Fragment>
                <Jumbotron className="footer-body">
                    <Container>
                        <Row>

                            <Col className="footer-col2">
                                <Row>
                                    <div className="pune">
                                        <h5 style={{textAlign: 'center'}}>Ahmednagar</h5>
                                        <p>Dr.Dongare Complex, Gajanan Colony, Vadgaon Gupta Road, MIDC, Ahmednagar</p>
                                    </div>
                                    <div>
                                        {/*<h5>Hyderabad</h5>*/}
                                        {/*<p>302, Hi-Line Complex, Banjara Hills, Road Number 12, Hyderabad, Telangana, IN*/}
                                        {/*    500034</p>*/}
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <br/>
                    <div id="private-limited">© 2020 JHANKAR ELECTRONICS PRIVATE LIMITED</div>
                </Jumbotron>
            </React.Fragment>
        );

    }
}

export default Footer;
