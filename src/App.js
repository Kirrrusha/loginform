import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import store from './store';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import NewsContainer from './containers/NewsContainer';
import LoginContainer from './containers/LoginContainer';
import ProfileContainer from './containers/ProfileContainer';
import NotFound from './pages/NotFound';
import Header from './components/header';
import PrivateRoute from './containers/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="container-full">
        <Header/>
        <div className="container">
          <div className='row'>
            <Switch>
              <Redirect exact from="/" to="/login"/>
              <Route exact path="/" component={Home}/>
              <Route path="/news" component={NewsContainer}/>
              <Route path="/login" component={LoginContainer}/>
              <PrivateRoute path="/profile" component={ProfileContainer}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.session.user,
  }
}

// export default connect(mapStateToProps)(App);
export default App;
