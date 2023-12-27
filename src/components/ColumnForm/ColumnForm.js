import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD_COLUMN', payload: { title, icon }})
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      Title: <TextInput  value={title} onChange={e => setTitle(e.target.value)} />
      Icon: <TextInput  value={icon} onChange={e => setIcon(e.target.value)}/>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;