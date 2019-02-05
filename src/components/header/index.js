import React, {Component} from 'react';
import LinkBtn from '../linkbtn';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <LinkBtn to="/" label={'Главная'}/>
            <LinkBtn to="/profile" label={'Профиль'}/>
            <LinkBtn to="/news" label={'Новости'}/>
            <LinkBtn to="/not-found" label={'404'}/>
            {/*<LinkBtn to="/login" label={'Логин'}/>*/}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
