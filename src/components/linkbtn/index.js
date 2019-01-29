import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

class LinkBtn extends Component {

    static propTypes = {
        label: PropTypes.string,
        to: PropTypes.string
    };

    state = {};

    render() {
        const {to, label} = this.props;
        return (
            <div>
                <NavLink exact to={to} className="nav-link" activeClassName="">
                    {label}
                </NavLink>
            </div>
        );
    }
}

export default LinkBtn;
