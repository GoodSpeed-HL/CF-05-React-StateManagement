import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Template from './Template';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from './redux/index';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import PublicTemplate from "./PublicTemplate";
import Login from "./components/Login";



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router>
          <Switch>
              <Route path="/" exact>
                  <PublicTemplate>
                      <Products/>
                  </PublicTemplate>
              </Route>
              <Route path="/checkout">
                  <Template>
                      <Checkout/>
                  </Template>
              </Route>
              <Route path="/login">
                  <Login/>
              </Route>


          </Switch>
          </Router>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
