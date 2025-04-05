import { RiSaveLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineCancel } from 'react-icons/md';
import { updatecurrentTodo, addcurrentTodo } from '../../redux/todosSlice';

import style from './EditForm.module.css';

const EditForm = () => {
  const currentTodo = useSelector(state => state.todos.currentTodo);
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.text.value;
    dispatch(updatecurrentTodo(value));
  };

  const handleClick = () => {
    dispatch(addcurrentTodo(null));
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleClick}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
