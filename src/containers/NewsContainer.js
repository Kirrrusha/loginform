import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getAll} from '../selectors';
import {getNews} from '../modules/actions';
import {connect} from 'react-redux';
import NewsList from '../components/NewsList';

class NewsContainer extends Component {

  componentDidMount() {
    this.props.onGetNews();
  }

  static propTypes = {
    data: PropTypes.shape({
      data: PropTypes.array,
      isLoading: PropTypes.bool.isRequired,
      errorMsg: PropTypes.string,
    })
  };

  render() {
    const {news: {isLoading, data, errorMsg}} = this.props;
    return (
      <div>
        {errorMsg && <p>{errorMsg}</p>}
        {isLoading ? <p>Loading...</p> : null}
        {data && data.length && <NewsList data={data} />}
      </div>
    );
  }
}

const mapStateProps = state => ({
  news: getAll(state)
});

const mapDispatchToProps = dispatch => ({
  onGetNews: () => dispatch(getNews())
});

export default connect(mapStateProps, mapDispatchToProps)(NewsContainer);
