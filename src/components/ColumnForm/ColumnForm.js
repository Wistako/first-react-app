import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';

const ColumnForm = props => {
  
  const [value, setValue] = useState('');
  const [icon, setIcon] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    props.action({title: value, icon: icon});
    setValue('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      Title: <TextInput  value={value} onChange={e => setValue(e.target.value)} />
      Icon: <TextInput  value={icon} onChange={e => setIcon(e.target.value)}/>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;