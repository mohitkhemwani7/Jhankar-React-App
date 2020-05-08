import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import './newCard.css';

const NewCard = (props) => {
    return (
        <div>
            <Card>

                <CardContent className="new-card">
                    <Container id="content">
                        <Row>
                            <Col>
                                112
                            </Col>
                            <Col>
                                1122334455
                            </Col>
                            <Col xl={4}>
                                Veg Pizza,
                                chicken pizza,
                                veg noodles
                            </Col>

                            <Col>
                                Preparing
                            </Col>
                            <Col>
                                Rs. 235
                            </Col>
                            <Col>
                                <Button>Mark Ready</Button>
                            </Col>
                        </Row>
                    </Container>
                </CardContent>
                {/*</CardActionArea>*/}
            </Card>
        </div>
    );
};


export default NewCard;


