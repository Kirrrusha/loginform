import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logIn} from '../modules/actions';


class Form extends Component {

  static propTypes = {
    logIn: PropTypes.func.isRequired,
  };

  state = {
    login: '',
    password: ''
  };

  render() {
    return (
      <div>
        <form action='#' onSubmit={this.onClickHandle}>
          <div className="form-group">
            <label htmlFor="login">Логин</label>
            <input className="form-control" type="text" id="login" value={this.state.login}
                   onChange={this.onChangeHandler('login')}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input className="form-control" type="password" id="password" value={this.state.password}
                   onChange={this.onChangeHandler('password')}/>
          </div>
          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>
      </div>
    );
  }

  onChangeHandler = (type) => (e) => {
    if (type === 'login') {
      this.setState({login: e.currentTarget.value});
    } else {
      this.setState({password: e.currentTarget.value});
    }
    console.log(this.state);
  };

  onClickHandle = () => {
    const {logIn} = this.props;
    const {login, password} = this.state;
    logIn({login, password});
  }
}

export default connect(null, {logIn})(Form);
