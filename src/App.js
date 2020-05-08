import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import history from './__helpers/history';
import {LoginPage} from "./components/login/Login";
import LandingPage from './components/landing_page/LandingPage'
import CategoryPage from './components/categories/categoryPage';
import Products from "./components/products/products";
// import Cart from "./components/cart/cart";
import {alertActions} from "./__actions/alertActions";
import {connect} from "react-redux";
import {PrivateRoute} from "./components/PrivateRoute";
import Razorpay from "./components/RazorPay/Razorpay";

class App extends Component {
    constructor(props) {
        super(props);

        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        return (

            <Router history={history}>
                <Switch>
                    {/* <Route exact path="/" component={HomePage}></Route> */}
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/category" component={CategoryPage}/>
                    <Route exact path="/product" component={Products}/>
                    {/*<Route exact path="/cart" component={Cart}/>*/}
                    <Route exact path="/payment" component={Razorpay}/>
                </Switch>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    return {
        alert
    };
}

export default App = connect(mapStateToProps)(App);

