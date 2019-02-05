import React, {Component} from 'react';
import Header from '../App';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from './Home';
import NewsContainer from '../containers/NewsContainer';
import ProfileContainer from '../containers/ProfileContainer';
import NotFound from './NotFound';
import PrivateRoute from '../containers/PrivateRoute';

class Main extends Component {

  render() {
    return (
      <div className="container-full">
        <Header/>
        <div className="container">
          <div className='row'>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/news" component={NewsContainer}/>

              <PrivateRoute path="/profile" component={ProfileContainer}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
