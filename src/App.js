import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        console.log(this.props)
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
                    </a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">0 item</a>
                        </li>
                    </ul>
                </nav>
                <div className={"container mt-4"}>
                    <h1 className={"mb-4"}>Shopping Cart</h1>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><span className={"float-right"}>5</span>Product 1</h5>
                                    <p className="card-text">Description.</p>
                                    <a href="#" className="btn btn-primary">Add</a>
                                </div>
                            </div>
                        </div>
                    </div>
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
    // ... normally is an object full of action creators
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

