import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export const protect = WrappedComponent => {

  class AuthenticatedComponent extends React.Component {

    render () {
      const {isAuth, loading} = this.props;
      return isAuth ? <WrappedComponent {...this.props} /> : loading ? 'Loading...' : <Redirect to="/login" />
    }
  }

  const mapStateToProps = (state) => ({
    isAuth: state.session.user,
    loading: state.session.loading,
  });

  return connect(mapStateToProps)(AuthenticatedComponent);

};
