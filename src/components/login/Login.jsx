import React from 'react';
import {userActions} from "../../__actions/userActions";
import {connect} from 'react-redux'
import Header from "../header/header";
import Footer from "../footer/footer";
import './login.css'


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
            submitted: false,
            userType: JSON.parse(localStorage.getItem('user')),
        };
        this.props.dispatch(userActions.logout());

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {mobile, password} = this.state;
        const {dispatch} = this.props;
        if (mobile && password) {
            dispatch(userActions.login(mobile, password));
        }
    }


    render() {
        const {loading,loggedIn} = this.props;
        const {mobile, password, submitted} = this.state;
        return (
            // this.props.user.loggedIn ? <Redirect to="/"></Redirect>:
            <React.Fragment>
                <Header/>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <h2 className="active"> Sign In </h2>
                        {/*<h2 className="inactive underlineHover">Sign Up </h2>*/}
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !mobile ? ' has-error' : '')}>
                                <label htmlFor="mobile">Mobile</label><br/>
                                <input type="text" pattern="[0-9]*" className="form-control fadeIn second" name="mobile"
                                       value={mobile} id="login"
                                       onChange={this.handleChange}/>
                                {submitted && !mobile &&
                                <div className="help-block">Mobile is required</div>
                                }
                            </div>
                            <div>
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control fadeIn third" name="password"
                                       value={password} id="password"
                                       onChange={this.handleChange}/>
                                {submitted && !password &&
                                <div className="help-block">Password is required</div>
                                }
                                <input type="submit" className="fadeIn fourth" value="Log In"
                                       onClick={this.handleSubmit}/>
                            </div>
                        </form>
                    </div>
                    {loggedIn}
                </div>
                <Footer/>
            </React.Fragment>


        );
    }
}

function mapStateToProps(state) {
    const {loggedIn} = state.authentication;
    return {loggedIn};
}

const LoggingPage = connect(mapStateToProps)(LoginPage);
export {LoggingPage as LoginPage};
