import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const items = useSelector(state => state.todos.items);
  const filterText = useSelector(state => state.filters.filter);
  const visibleTodos = items.filter(
    item =>
      item.text && item.text.toLowerCase().includes(filterText.toLowerCase()),
  );
  return (
    <>
      {visibleTodos.map((el, index) => (
        <Todo key={el.id} text={el.text} index={index} id={el.id} />
      ))}
    </>
  );
};

export default TodoList;
