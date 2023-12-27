import { useState } from 'react';
import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';

const CardForm = props => {
  const dispatch = useDispatch();
  const columnId = props.columnId;
  const [title, setTitle] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD_CARD', payload: {title, columnId}});
    setTitle('');
  }
  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
      <Button>Add card</Button>
    </form>
  );
}
export default CardForm;