import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./createuser.css"
import {createUserActions} from "../../../__actions/createUserActions";
import {connect} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import Header from "../../header/header";
import {industryActions} from "../../../__actions/industryActions";
import {Col} from "react-bootstrap";

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mobile: "",
            email: "",
            password: "",
            submitted: "",
            industry: "1",
            industry_data: [],
            userType: JSON.parse(localStorage.getItem('user')),

        }

    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };



    handleSubmit = (e) => {
        e.preventDefault();
        let body = {};
        this.setState({submitted: true});
        const {name, email, mobile, password,industry} = this.state;
        if (mobile && password && name && email) {
            body = JSON.stringify({
                name: name,
                email: email,
                mobile: mobile,
                password: password,
                industry: industry
            });
            this.props.dispatch(createUserActions.create_user(body));
            this.setState({
                name: "",
                email: "",
                mobile: "",
                password: "",
                industry: "1",
            })
        } else {
            toast.error("Fill all the fields")
        }
    };

    componentWillMount() {
        this.props.dispatch(industryActions.getIndustry());
        const temp = this.props.industry_data;
        this.setState({industry_data: temp});
    }


    render() {
        let selectIndustry = "";
            selectIndustry = <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Industry</Form.Label>
                <Form.Control as="select" name="industry" value={this.state.industry} onChange={this.handleChange}>
                    {this.props.industry_data && this.props.industry_data.map((industryList, index) => {
                        return <option value={industryList.id} key={index}>
                            {industryList.name}
                        </option>
                    })
                    }
                </Form.Control>
            </Form.Group>;
        if(this.state.userType.type !== "N")
            return (
            <div>
                <Header/>
                <ToastContainer/>
                <div style={{textAlign: "center"}}>
                    <h3>Add New User</h3>
                </div>
                <div className="signup_form">
                    <Form>
                        <Form.Group>
                            <Form.Label>Name :</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.name} placeholder="Name"
                                          onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={this.state.email} background="white"
                                          placeholder="Email"
                                          onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="text" name="mobile" value={this.state.mobile} placeholder="Mobile no."
                                          onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password}
                                          placeholder="Password"
                                          onChange={this.handleChange}/>
                        </Form.Group>
                        {selectIndustry}
                        <Button variant="primary" type="submit" value="Submit"
                                onClick={this.handleSubmit}>
                            Create User
                        </Button>
                    </Form>
                </div>
            </div>
            );
        else
            return (
            <div>
                I am a Normal User
            </div>
        );
    }
}

function mapsStateToProps(state) {
    const {ManagerData} = state.createUserReducer;
    const {ManagerError} = state.createUserReducer;
    const {industry_data} = state.industryReducer;
    return {ManagerData, ManagerError,industry_data};
}

export default connect(mapsStateToProps)(CreateUser);
