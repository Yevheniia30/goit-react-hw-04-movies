import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ReviewsView.module.css';

class ReviewsView extends Component {
  render() {
    const { reviews } = this.props;

    return (
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p className={s.rew_author}>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </div>
    );
  }
}

ReviewsView.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};

export default ReviewsView;
