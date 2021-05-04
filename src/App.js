import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Beers from './components/pages/Beers/Beers';
import BeerDetail from './components/pages/BeerDetail/BeerDetail';
import NewBeer from './components/pages/NewBeer/NewBeer';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:beerId" component={BeerDetail} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
