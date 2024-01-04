import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';
import styles from './ColumnFavorite.module.scss';
import Card from '../Card/Card';

const ColumnFavorite = () => {
  const favCards = useSelector(getFavoriteCards);
  return (
    <div className={styles.column}>
      <ul className={styles.cards}>
        {favCards.map(card => <Card key={card.id} {...card} className={card.favorite? ` ${styles.favorite}` : ''} />)}
      </ul>
    </div>
  )
};
export default ColumnFavorite;