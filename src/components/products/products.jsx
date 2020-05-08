import React, {Component} from "react";
import Header from "../header/header";
import ProductCard from "../card/products/ProductPageCard";
import './products.css';
import Footer from "../footer/footer";
import axios from "axios";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        const ID= localStorage.getItem("id");
        console.log(ID);

        axios.get("http://localhost:8000/api/products/ID")
            .then(res => {
                const data = res.data.response;
                this.setState({products: data});
            })
            .catch(error => {
                alert(error)
            });
    }


    loadFillData = () => {

        return this.state.products && this.state.products.map((data, index) => <ProductCard
            key={index} {...data}/>);
    };

    render() {

        return (
            <React.Fragment>
                <div>
                    <Header/>
                </div>

                <div className="product-card-grid">
                    {this.loadFillData()}
                </div>

                <Footer/>
            </React.Fragment>
        )
    }
}

export default Products;
