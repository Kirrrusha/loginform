import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinkBtn from '../linkbtn';

class Header extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <header>
        <LinkBtn to="/" label={'Главная'} />
        <LinkBtn to="/profile" label={'Профиль'} />
        <LinkBtn to="/news" label={'Новости'} />
        <LinkBtn to="/not-found" label={'404'} />
        <LinkBtn to="/login" label={'Логин'} />
      </header>
    );
  }
}

export default Header;
