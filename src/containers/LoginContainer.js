import {connect} from 'react-redux';
import {logIn} from '../modules/actions';
import Login from '../pages/Login';

const mapStateToProps = state => ({
  errorMsg: state.session.errorMsg,
});

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
