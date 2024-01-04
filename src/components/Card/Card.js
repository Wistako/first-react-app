import styles from './Card.module.scss';
import { clsx }from 'clsx';
import { useDispatch } from 'react-redux';
import {toggleFavorite} from '../../redux/cardsRedux.js';

const Card = props => {
  const dispatch = useDispatch();
  const handle = e => {
    e.preventDefault();
    dispatch(toggleFavorite({id: props.id}));
  };

  return <li className={styles.card}>{props.title}<button className={clsx(styles.button ,props.className)} onClick={handle}><i className={'fa fa-star-o '}></i></button></li>
};

export default Card;