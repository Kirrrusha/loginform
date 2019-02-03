import React, {Component} from 'react';
import {connect} from 'react-redux';
import Profile from '../components/Profile';
import {getProfile, logOut} from '../modules/actions';
import PropTypes from 'prop-types';

class ProfileContainer extends Component {
  // static propTypes = {
  //   profile: PropTypes.shape({
  //     data: PropTypes.object,
  //     isLoading: PropTypes.bool.isRequired,
  //     errorMsg: PropTypes.string,
  //   })
  // };

  componentDidMount() {
    const {user} = this.props;
    this.props.onGetProfile(user.id);
  }


  render() {
    const {user, profile: {isLoading, data, errorMsg}} = this.props;
    return (
      <div>
        {errorMsg && <p>{errorMsg}</p>}
        {isLoading ? <p>Loading...</p> : null}
        {data && <Profile user={user} profile={data} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  onGetProfile: (params => dispatch(getProfile(params)))
});

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
