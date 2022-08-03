import styles from './Card.module.scss';
import clsx from 'clsx';

import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleClickFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(id));
  };

  const handleClickRemove = (e) => {
    e.preventDefault();
    dispatch(removeCard(id));
  };

  return (
    <div>
      <li className={styles.card}>
        {title}
        <div>
        <button className={styles.favButton} onClick={handleClickFavorite}>
          <span className={clsx('fa fa-heart', isFavorite && styles.isFavorite)}></span>
        </button>
        <button className={styles.favButton} onClick={handleClickRemove}>
          <span className="fa fa-trash"></span>
        </button>
        </div>
      </li>
    </div>
  );
};

export default Card;
