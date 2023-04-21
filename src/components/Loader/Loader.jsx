import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { Spiner } from './LoaderSpiner';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div
      style={{
        height: '50px',
        width: '400px',
        textAlign: 'center',
      }}
    >
      {isLoading && !error && <Spiner />}
    </div>
  );
};
