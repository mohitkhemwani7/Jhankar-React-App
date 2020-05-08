import React from "react";
import NewCard from "../../newcard/NewCard";
import './orders.css'
import Button from "react-bootstrap/Button";
import FullscreenDialog from "material-ui-fullscreen-dialog";
import FlatButton from "material-ui/FlatButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Autosuggest from 'react-autosuggest';
import Col from "react-bootstrap/Col";
import {Row} from "react-bootstrap";
import Popup from "reactjs-popup";
import {productActions} from "../../../__actions/productActions";
import {connect} from "react-redux";


class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            open: false,
            checked: true,
            value: '',
            suggestions: [],
            product_data: [],
            userType: JSON.parse(localStorage.getItem('user')),

        };
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.getSuggestions = this.getSuggestions.bind(this);
        Orders.getSuggestionValue = Orders.getSuggestionValue.bind(this);
    }

    getSuggestions(value){
        const inputValue = value;
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.props.product_data.filter(product =>
            product.id.toString() === inputValue
        );
    };

    static getSuggestionValue(suggestion) {
        return suggestion.id;
    };

    handleAddProduct() {
        console.log("Added Product to the cart")
    };

    onChange = (event, {newValue}) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({value}) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    toggleHidden = () => {
        this.setState({
            checked: !this.state.checked
        })
    };


    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    static renderSuggestion(suggestion) {
        return <div>
                <span>{suggestion.product_details.name}</span>
                <Button type="button" onClick={handleCart}>+</Button>
            </div>;

    }
    componentWillMount() {
        this.props.dispatch(productActions.getProducts());
        const temp = this.props.product_data;
        this.setState({product_data: temp});
    }


    render() {

        const {value, suggestions, itemList} = this.state;
        const inputProps = {
            placeholder: 'Search Product',
            value,
            onChange: this.onChange
        };

        return (
            <div>
                <div style={{textAlign: "center"}}>

                    <MuiThemeProvider>
                        <div>
                            <FullscreenDialog
                                open={this.state.open}
                                onRequestClose={(...args) => {
                                    // action('onRequestClose')(...args);
                                    this.setState({open: false})
                                }}
                                title='New Order'
                                actionButton={<FlatButton
                                    label='Done'
                                    onClick={() => this.setState({open: false})}
                                />}
                            >
                                <div>
                                    <Row>
                                        <Col className="wrapper1">
                                            <FormControl component="fieldset">
                                                <FormGroup aria-label="position" name="position" value="" row>
                                                    <FormControlLabel
                                                        value="end"
                                                        control={<Checkbox color="primary"
                                                                           checked={this.state.checked}
                                                                           onChange={this.toggleHidden}/>}
                                                        label="Anonymous User"
                                                        labelPlacement="end"
                                                    />
                                                </FormGroup>
                                            </FormControl>

                                            {!this.state.checked && <Child/>}

                                            <div style={{marginTop: "20px"}}>
                                                <span>Payment Options: </span>
                                                <div className="toggle_radio">
                                                    <input type="radio" defaultChecked={true}
                                                           className="toggle_option"
                                                           id="first_toggle"
                                                           name="toggle_option"/>
                                                    <input type="radio" className="toggle_option"
                                                           id="second_toggle" name="toggle_option"/>
                                                    <label htmlFor="first_toggle"><p>Cash</p>
                                                    </label>
                                                    <label htmlFor="second_toggle"><p>Online</p>
                                                    </label>
                                                    <div className="toggle_option_slider">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{marginTop: "20px"}}>
                                                <Popup modal trigger={<Button> Save and Print</Button>}
                                                       position="center center">
                                                    {close => (
                                                    <div>
                                                        <h4>DoorMonk
                                                            <a className="close" onClick={close}>
                                                                &times;
                                                            </a>
                                                        </h4>
                                                        <p>ISO</p>
                                                        <p>{this.state.date.toLocaleDateString()}<br/>{this.state.date.toLocaleTimeString()}
                                                        </p>
                                                        <p>OrderId: 312</p>
                                                        <hr/>
                                                        <Col>
                                                            <Row id="bill-items">
                                                                1. Poha * 2:  40
                                                            </Row>
                                                            <Row id="bill-items">
                                                                2. Maggi * 1:  70
                                                            </Row>
                                                        </Col>
                                                        <hr/>
                                                        <p> Total: Rs.110</p>
                                                        <Button onClick={() => window.print()}>Print</Button>
                                                    </div>)}
                                                </Popup>
                                            </div>
                                        </Col>
                                        <Col className="wrapper1">
                                            <Autosuggest
                                                suggestions={suggestions}
                                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                                getSuggestionValue={Orders.getSuggestionValue}
                                                renderSuggestion={Orders.renderSuggestion}
                                                inputProps={inputProps}>
                                            </Autosuggest>
                                            {/*<Form.Group as={Col} controlId="formGridState">*/}
                                            {/*    <Form.Label>Products</Form.Label>*/}
                                            {/*    <Form.Control as="select" name="products" value={"products"} onChange={this.handleChange}>*/}
                                            {/*        {this.props.product_data && this.props.product_data.map((productList, index) => {*/}
                                            {/*            return <option value={productList.id} key={index}>*/}
                                            {/*                {productList.id}*/}
                                            {/*            </option>*/}
                                            {/*        })*/}
                                            {/*        }*/}
                                            {/*    </Form.Control>*/}
                                            {/*</Form.Group>*/}
                                        </Col>
                                    </Row>
                                </div>
                            </FullscreenDialog>

                            <Button id="create-order"
                                    onClick={() => this.setState({open: true})}>
                                Create Order</Button>
                        </div>
                    </MuiThemeProvider>
                </div>
                <div style={{height: '770px', overflowY: 'scroll'}}>
                    <NewCard/>
                    <NewCard/>
                    <NewCard/>
                    <NewCard/>
                    <NewCard/>
                    <NewCard/>
                    <NewCard/>
                    <NewCard/>
                    <NewCard/>
                    <NewCard/>
                </div>
            </div>
        )
    }
}



function handleCart(id) {
    console.log(" item added",id);

}

const Child = () => (
    <div className='form-group'>
        <input
            name='name'
            className="input1"
            id='mobile'
            placeholder='Mobile Number'
        />
    </div>
);
function mapStateToProps(state) {
    const {product_data} = state.productReducers;
    return {product_data};
}

export default connect(mapStateToProps)(Orders);
