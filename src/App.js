import React, {Component} from 'react';
import Form from './components/Login';
import { Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Header from './components/header';
import Home from './components/Home';
import News from './components/News';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/login" component={Form} />
            {/*<PrivateRoute path="/profile" component={ProfileContainer} />*/}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
