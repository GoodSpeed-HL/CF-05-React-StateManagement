import React, {Component} from 'react';
import productSlice from "../redux/productSlice";
import cartSlice from "../redux/cartSlice";
import {connect} from "react-redux";
const {addToCart, removeFromCart} = cartSlice.actions;
class Checkout extends Component {
    render() {
        return (
            <>
                <h1 className={"mb-4"}>Checkout</h1>
                <ul className="list-group mb-3">
                    {this.props.cart.items.map(item => {
                        return (
                            <li key={item.id} className="list-group-item d-flex justify-content-between lh-condensed">
                                <div className={"w-50"}>
                                    <h6 className="my-0">{item.title} x {item.quantity}</h6>
                                    <small className="text-muted">Description</small>
                                </div>
                                <span className="text-muted">${item.price}</span>
                                <div>
                                    <button className={"btn btn-danger mr-2"} onClick={(e) => {
                                        e.preventDefault();
                                        this.props.removeFromCart(item);
                                    }}>Remove</button>
                                    <button  className={"btn btn-primary"} onClick={(e) => {
                                        e.preventDefault();
                                        this.props.addToCart(item)
                                    }}>Add</button>
                                </div>
                            </li>
                       )
                    })}
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>${this.props.cart.total}</strong>

                    </li>
                </ul>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) =>  {
    return {
        cart: state.cart,
        productList: state.product
    }
}

const mapDispatchToProps = {
    removeFromCart,
    addToCart
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout)




