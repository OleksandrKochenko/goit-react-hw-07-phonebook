import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = filter => dispatch(setFilter(filter));

  return (
    <label>
      Find contacts by name: {'\u00A0'}
      <input type="text" onChange={e => handleFilterChange(e.target.value)} />
    </label>
  );
};

export default Filter;
