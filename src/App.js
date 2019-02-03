import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Header from './components/header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import PrivateRoute from './containers/PrivateRoute';
import ProfileContainer from './containers/ProfileContainer';
import LoginContainer from './containers/LoginContainer';
import NewsContainer from './containers/NewsContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header/>
        <div className="container">
          <div className='row'>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/news" component={NewsContainer}/>
              <Route path="/login" component={LoginContainer}/>
              <PrivateRoute path="/profile" component={ProfileContainer}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
