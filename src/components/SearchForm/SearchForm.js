import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import styles from './SearchForm.module.scss';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'FILTER', payload: title});
  }
  return (
      <form className={styles.searchForm} onSubmit={handleSubmit}>
          <TextInput placeholder="Search..." onChange={e => {setTitle(e.target.value)}}/>
          <Button>
            <span className="fa fa-search"/>
          </Button>
      </form>
  );
};

export default SearchForm;