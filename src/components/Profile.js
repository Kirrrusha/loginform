import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Profile extends Component {

  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {};

  render() {
    const {user} = this.props;
    return (
      <div>
        <h2>Профиль</h2>
        <p>Вас зовут: {user.name}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
