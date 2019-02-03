import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {

  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {};

  render() {

    const {user} = this.props;
    return (
      <div>
        <h2>Профиль</h2>
        <p>Ваша почта: {user.email}</p>
      </div>
    );
  }
}

export default Profile;
