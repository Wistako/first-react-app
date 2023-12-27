import styles from './Column.module.scss'
import 'font-awesome/css/font-awesome.min.css'
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';

const Column = props =>{
  const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(state.filter.toLowerCase())));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon}></span>
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} />)}
        <CardForm columnId={props.id}/>
      </ul>
    </article>
  );
}

export default Column;