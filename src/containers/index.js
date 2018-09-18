import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';

class Containers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/login' render={() => <Login />} />
          <Route path='*' render={() => <NotFound />} />
          Test
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Containers;
