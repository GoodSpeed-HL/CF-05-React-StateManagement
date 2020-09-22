import React, {Component} from 'react';
import Header from "./components/Header";
import {withRouter} from "react-router-dom";


class Template extends Component {
    componentDidMount() {
        if(!localStorage.getItem("token")){
            this.props.history.push("/");
        }
    }

    render() {
        console.log(process.env.REACT_APP_API_ENDPOINT)
        return (
            <>
                <Header/>
                <div className={"container"}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default withRouter(Template)