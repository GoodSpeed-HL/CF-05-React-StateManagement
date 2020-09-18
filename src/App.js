import React, {Component} from 'react';
import Header from "./components/Header";


class App extends Component {
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

export default App