import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { filters } from '../../redux/filterSlice';

const Filter = () => {
  const handleChange = event => {
    const value = event.target.value;
    dispatch(filters(value));
  };
  const dispatch = useDispatch();
  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={handleChange}
    />
  );
};

export default Filter;
