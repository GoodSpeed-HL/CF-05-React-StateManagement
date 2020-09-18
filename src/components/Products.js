import React, {Component} from 'react';
import {addProduct} from "../redux/actionCreator";
import {connect} from "react-redux";

class Products extends Component {
    render() {
        return (
            <>
                <h1 className={"mb-4"}>Shopping Cart</h1>
                <div className="row">
                    {this.props.productList.map(item => {
                        return (<div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><span className={"float-right"}>{item.inventory}</span>{item.title}</h5>
                                    <p className="card-text">Description.</p>
                                    <a href="#" className="btn btn-primary" onClick={(e) => {
                                        e.preventDefault();
                                        this.props.addProduct(item)
                                    }}>Add To Cart</a>
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
        productList: state.shop.productList
    }
}

const mapDispatchToProps = {
    addProduct
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)




