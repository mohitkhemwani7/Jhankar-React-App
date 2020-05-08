import React, {Component} from 'react';
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import {Button, Col, FormControl, Jumbotron} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './categoryPage.css';
import InputGroup from "react-bootstrap/InputGroup";
import CategoryCard from "../card/CategoryCard";
import axios from 'axios';


class CategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {

        axios.get("http://localhost:8000/api/categories")
            .then(res => {
                const data = res.data.response;
                this.setState({categories: data});
            })
            .catch(error => {
                alert(error)
            });

    }

    loadFillData = () => {

        return this.state.categories && this.state.categories.map((data, index) => <CategoryCard
            key={index} {...data}/>);
    };

    render() {

        return (
            <React.Fragment>
                <Jumbotron>
                    <div className="header-categories">
                        <Header/>
                    </div>
                    <div>
                        <div className="category-card-grid">
                            {this.loadFillData()}
                        </div>

                    </div>
                </Jumbotron>
                <Jumbotron className="jmb-2">
                    <Container>
                        <Row>
                            <Col>
                                <p>Avail exclusive offers only on DoorMonk</p>
                            </Col>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <Button variant="outline-secondary" disabled
                                                style={{color: 'black'}}>+91</Button>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder=""
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary"
                                                style={{background: 'green', color: 'black'}}>Submit</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <div>
                    <Footer/>
                </div>
            </React.Fragment>

        );
    }
}

export default CategoryPage;
