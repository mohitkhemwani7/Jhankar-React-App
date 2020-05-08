import React, {Component} from 'react';
import {Image, Nav, Navbar} from 'react-bootstrap';
import './header.css';
import Headroom from 'react-headroom';
// import history from "../../__helpers/history";
import {connect} from "react-redux";

class Header extends Component {

    // handleRedirect = () => {
    //     if (this.props.count !== 0) {
    //         history.push('/cart');
    //     }
    // };

    render() {
        return (
            <div className="head">
                <Headroom>
                    <Navbar collapseOnSelect expand="lg" className="main-header">
                        {/*<Navbar.Brand href="/" className="Logo"><Image className="brand-logo"*/}
                        {/*                                               src="https://s3.ap-south-1.amazonaws.com/test-bucket-doormonk/black.png"/></Navbar.Brand>*/}
                        <Navbar.Brand className="brand-name">Jhankar Electronics & Electricals</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#"/>
                                <Nav.Link href="#"/>
                                <Nav.Link href="#"/>
                            </Nav>
                            {/*<Nav>*/}
                            {/*    <Nav.Link href="https://www.instagram.com/doormonkians/" target="_blank">*/}
                            {/*        <i className="fa fa-instagram"/>*/}
                            {/*    </Nav.Link>*/}
                            {/*    <Nav.Link href="https://www.facebook.com/doormonkians/" target="_blank">*/}
                            {/*        <i className="fa fa-facebook"/>*/}
                            {/*    </Nav.Link>*/}
                            {/*</Nav>*/}
                        </Navbar.Collapse>
                    </Navbar>
                </Headroom>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     const {count} = state.cartReducer;
//     return {
//         count: count
//     }
// }


export default Header;

