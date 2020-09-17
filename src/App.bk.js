import React, {Component} from 'react';
import {connect} from 'react-redux';
import Drawer from 'rc-drawer';
class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                dfgdfg
                <Drawer open={true} placement={'right'} width={'20vw'} >
                    sdfjlosdflkj
                    sdlkfjl
                    sldjfl
                    sdlkjfwoier
                </Drawer>
            </div>
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

