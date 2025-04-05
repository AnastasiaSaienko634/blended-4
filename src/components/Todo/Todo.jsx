import { useDispatch } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RiEditFill } from 'react-icons/ri';
import Text from '../Text/Text';
import css from './Todo.module.css';
import { deleteTodo } from '../../redux/todosSlice';
import { addcurrentTodo } from '../../redux/todosSlice.js';
const Todo = ({ text, id, index }) => {
  const dispatch = useDispatch();

  const handleClick = event => {
    dispatch(deleteTodo(id));
  };

  const handleClickRedact = event => {
    dispatch(
      addcurrentTodo({
        id,
        text: text,
      }),
    );
  };
  return (
    <div className={css.box}>
      <Text textAlign="center" marginBottom="20">
        TODO#{index + 1}
      </Text>
      <p>{text}</p>
      <button
        className={`${css.button} ${css.deleteButton}`}
        onClick={() => {
          handleClick(id);
        }}
      >
        <FaRegTrashAlt />
      </button>
      <button
        className={`${css.button} ${css.editButton}`}
        onClick={handleClickRedact}
      >
        <RiEditFill />
      </button>
    </div>
  );
};

export default Todo;
