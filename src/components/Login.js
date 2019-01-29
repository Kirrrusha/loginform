import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logIn} from '../modules/actions';


class Login extends Component {

  static propTypes = {
    logIn: PropTypes.func.isRequired,
    errorMsg: PropTypes.string,
  };

  state = {
    redirectToPreviousRoute: false,
    username: '',
    password: ''
  };

  render() {
    const { location, errorMsg } = this.props
    return (
      <div>
        {errorMsg && <p>{errorMsg}</p>}
        <form action='#' onSubmit={this.onSubmitHandle}>
          <div className="form-group">
            <label htmlFor="login">Логин</label>
            <input className="form-control" type="text" id="login" value={this.state.username}
                   onChange={this.onChangeHandler('username')}/>
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
    if (type === 'username') {
      this.setState({username: e.currentTarget.value});
    } else {
      this.setState({password: e.currentTarget.value});
    }
    console.log(this.state);
  };

  onSubmitHandle = (e) => {
    e.preventDefault();
    const {logIn} = this.props;
    const {username, password} = this.state;
    logIn({username, password});
  };
}

const mapStateToProps = state => ({
  errorMsg: state.session.errorMsg,
});

const mapDispatchToProps = dispatch => ({
  logIn: (params) => dispatch(logIn(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
