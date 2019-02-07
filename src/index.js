import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import history from './history';
import LoginContainer from './containers/LoginContainer';
import PrivateRoute from './containers/PrivateRoute';
import {protect} from './security';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginContainer}/>
        <Route path="/" component={protect(App)}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
