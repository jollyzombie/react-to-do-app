import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm = ({ columnId }) => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ columnId, title }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <TextInput type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button>Add Card</Button>
    </form>
  );
};

export default CardForm;
