import React, {Component} from 'react';
import Header from "./components/Header";


class Template extends Component {
    render() {
        console.log(this.props)
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

export default Template