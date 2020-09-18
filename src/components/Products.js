import React, {Component} from 'react';
import {addProduct} from "../redux/actionCreator";

import {connect} from "react-redux";
import cartSlice from "../redux/cartSlice";
const {addToCart, removeFromCart} = cartSlice.actions;
class Products extends Component {
    render() {
        return (
            <>
                <h1 className={"mb-4"}>Shopping Cart</h1>
                <div className="row">
                    {this.props.productList.map(item => {
                        return (<div className="col-sm-4" key={item.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><span className={"float-right"}>{item.inventory}</span>{item.title}</h5>
                                    <p className="card-text">Description.</p>
                                    <button disabled={!item.inventory} className="btn btn-primary" onClick={(e) => {
                                        e.preventDefault();
                                        this.props.addToCart(item);
                                    }}>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16"
                                             className="bi bi-bag-plus-fill" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M5.5 3.5a2.5 2.5 0 0 1 5 0V4h-5v-.5zm6 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) =>  {
    return {
        productList: state.cart.productList
    }
}

const mapDispatchToProps = {
    addToCart
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)




