import styles from './Column.module.scss'
import 'font-awesome/css/font-awesome.min.css'
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux.js';

const Column = props =>{
  const cards = useSelector(state => getFilteredCards(state, props.id));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon}></span>
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} {...card} className={card.favorite ? ` ${styles.favorite}` : ''}/>)}
        <CardForm columnId={props.id}/>
      </ul>
    </article>
  );
}

export default Column;