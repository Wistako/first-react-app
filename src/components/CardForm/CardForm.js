import { useState } from 'react';
import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';

const CardForm = props => {

  const [title, setTitle] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    props.action({title: title}, props.columnId);
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