import { Component } from 'react';
import s from './ReviewsView.module.css';

class ReviewsView extends Component {
  state = {};

  componentDidMount() {
    // console.log(this.props);
  }

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

export default ReviewsView;
