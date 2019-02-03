import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewsList extends Component {

  static propTypes = {
    data: PropTypes.array
  };


  render() {
    const {data} = this.props;
    return (
      <div>
        {data.map(item => {
          return (
            <div key={item.id} className={'news-item'}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default NewsList;
