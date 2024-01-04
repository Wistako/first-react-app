import styles from './Card.module.scss';
import { clsx }from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/cardsRedux.js';
import { removeCard } from '../../redux/cardsRedux.js';

const Card = props => {
  const dispatch = useDispatch();
  const handleFav = e => {
    e.preventDefault();
    dispatch(toggleFavorite({id: props.id}));
  };
  const handleRemove = e => {
    e.preventDefault();
    dispatch(removeCard({id: props.id}));
  };
  return <li className={styles.card}>
      {props.title}
      <div>
        <button className={clsx(styles.button ,props.className)} onClick={handleFav}>
          <i className={'fa fa-star-o '}></i>
        </button>
        <button className={styles.button} onClick={handleRemove}>
          <i className={'fa fa-trash'}></i>
        </button>
      </div>
    </li>
};

export default Card;