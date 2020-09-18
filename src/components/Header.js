import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import cartSlice from "../redux/cartSlice";
class Header extends Component {
    render() {
        const {cart} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className={"navbar-brand"} to={"/"}>
                    <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
                </NavLink>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/checkout"}>
                            {cart.items.length} {cart.items.length <= 1 ? "item" : "items"}
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}


const mapStateToProps = (state, ownProps) =>  {
    return {
        cart: state.cart
    }
}



export default connect(
    mapStateToProps,
    null
)(Header)


