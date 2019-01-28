import React, {Component} from 'react';
import Form from './pages/form';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Form/>
      </Provider>
    );
  }
}

export default App;
