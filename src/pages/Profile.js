import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

class Profile extends Component {

  static propTypes = {
    logOut: PropTypes.func,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
    profile: PropTypes.object,
    isExit: PropTypes.bool
  };

  render() {
    const {user, profile, isExit} = this.props;
    return (
      <div>
        <h2>Профиль</h2>
        <p>Ваша почта: {user.email}</p>
        <button className="btn btn-primary" onClick={this.exitHandle}>Выйти</button>
        <p>Город:{profile.city}</p>
        <p>Языки: {profile.languages.map((lang, i) =>
          <span key={lang}>
          {lang}{i === profile.languages.length - 1 ? '. ' : ', '}
        </span>)}
        </p>
        <div>
          {profile.social.map(soc =>
            <a key={soc.label} href={soc.link} target="_blank">{soc.label}</a>)}
        </div>
      </div>
    );
  }

  exitHandle = (e) => {
    e.preventDefault();
    const {logOut} = this.props;
    logOut();
  };
}

export default Profile;
