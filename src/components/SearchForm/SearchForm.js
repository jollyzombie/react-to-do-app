import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchUpdate } from '../../redux/store';

const SearchForm = () => {
  const [searchTxt, setSearchTxt] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchUpdate(searchTxt));
    setSearchTxt('');
  };

  useEffect(() => {
    dispatch(searchUpdate(searchTxt));
  }, []);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder='Search...' type='text' value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};
export default SearchForm;
