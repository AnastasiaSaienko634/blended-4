import { FiSearch } from 'react-icons/fi';
import { addTodo } from '../../redux/todosSlice';
import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const item = form.elements.search.value;
    dispatch(addTodo({ id: nanoid(), text: item }));
    form.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
