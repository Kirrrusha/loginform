import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import NewsContainer from './containers/NewsContainer';
import ProfileContainer from './containers/ProfileContainer';
import NotFound from './pages/NotFound';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="container-full">
        <Header/>
        <div className="container">
          <div className='row'>
            <Switch>
              {/*<Redirect exact path="/" to="/"/>*/}
              <Route exact path="/" component={Home}/>
              <Route exact path="/news" component={NewsContainer}/>
              <Route exact path="/profile" component={ProfileContainer}/>
              <Route exact component={NotFound}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
