import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class News extends Component {

  static propTypes = {
    news: PropTypes.array.isRequired,
  };


  render() {
    const {news} = this.props;
    if (news.length) return `<p>Новостей нет</p>`;
    return (
      <ul>
        {news.map(article => (
          <li key={article.id}>
            {article.text}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  news: [],
});

export default connect(mapStateToProps)(News);
