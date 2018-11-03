import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom"
import Map from './Map.js'


class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route path="/Map" component={Map} />
          </div>
        </BrowserRouter>
    );
  }
}
export default Routes;
