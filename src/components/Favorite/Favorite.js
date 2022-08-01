import PageTitle from '../PageTitle/PageTitle';
import Container from '../Container/Container';
import Card from '../Card/Card';

import styles from './Favorite.module.scss';

import { getAllFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const favoriteCards = useSelector(getAllFavoriteCards);

  return (
    <Container>
      <PageTitle children='Favorite' />
      <article className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((favoriteCard) => (
            <Card
              key={favoriteCard.id}
              title={favoriteCard.title}
              isFavorite={favoriteCard.isFavorite}
              id={favoriteCard.id}
            />
          ))}
        </ul>
      </article>
    </Container>
  );
};

export default Favorite;
