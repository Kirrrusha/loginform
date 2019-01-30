import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logIn} from '../modules/actions';
import {Redirect} from "react-router-dom";


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
        const {location, errorMsg} = this.props;
        const { from } = location.state || { from: { pathname: '/' } };
        const { username, password, redirectToPreviousRoute } = this.state;

        if (redirectToPreviousRoute) {
            return <Redirect to={from} />
        }

        return (
            <div>
                {errorMsg && <p>{errorMsg}</p>}
                <form action='#' onSubmit={this.onSubmitHandle}>
                    <div className="form-group">
                        <label htmlFor="login">Логин</label>
                        <input className="form-control" type="text" id="login" value={username}
                               onChange={this.onChangeHandler} data-field-name={'username'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input className="form-control" type="password" id="password" value={password}
                               onChange={this.onChangeHandler} data-field-name={'password'}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>
            </div>
        );
    }

    onChangeHandler = (e) => {
        const value = e.currentTarget.value;
        const fieldName = e.currentTarget.dataset.fieldName;

        this.setState(prev => ({
            ...prev,
            [fieldName]: value,
        }))
    };

    onSubmitHandle = (e) => {
        e.preventDefault();
        const {logIn} = this.props;
        const {username, password} = this.state;
        logIn({username, password}, () => {this.setState({ redirectToPreviousRoute: true })});
        console.log(this.state);
    };
}

const mapStateToProps = state => ({
    errorMsg: state.session.errorMsg,
});

const mapDispatchToProps = dispatch => ({
    logIn: (params, cb) => dispatch(logIn(params, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
