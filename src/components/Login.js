import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";

class Login extends Component {

    static propTypes = {
        logIn: PropTypes.func.isRequired,
        errorMsg: PropTypes.string,
    };

    state = {
        redirectToPreviousRoute: false,
        email: '',
        password: ''
    };

    /*TODO: delete this*/
    componentWillMount() {
        const {errorMsg} = this.props;
        if (!errorMsg) {
            const emailStorage = localStorage.getItem('email');
            const passwordStorage = localStorage.getItem('password');
            if (emailStorage && passwordStorage) this.setState({email: emailStorage, password: passwordStorage});
        }

    }

    render() {
        const {location, errorMsg} = this.props;
        const { from } = location.state || { from: { pathname: '/profile' } };
        const { email, password, redirectToPreviousRoute } = this.state;


        if (redirectToPreviousRoute) {
            return <Redirect to={from} />
        }

        return (
            <div className="col col-xs-6">
                {errorMsg && <p>{errorMsg}</p>}
                <form action='#' onSubmit={this.onSubmitHandle} className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="login">Логин</label>
                        <input className="form-control" type="text" id="login" value={email}
                               onChange={this.onChangeHandler} data-field-name={'email'}/>
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
        const {email, password} = this.state;
        logIn({email, password}, () => {
            this.setState({ redirectToPreviousRoute: true });
        });
    };
}

export default Login;
