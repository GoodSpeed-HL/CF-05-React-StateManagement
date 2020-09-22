import React, {Component} from 'react';
import Header from "./components/Header";
import PublicHeader from "./components/PublicHeader";


class Template extends Component {
    render() {
        console.log(process.env.REACT_APP_API_ENDPOINT)
        return (
            <>
                <PublicHeader/>
                <div className={"container"}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Template