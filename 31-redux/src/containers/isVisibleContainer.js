import { useDispatch, useSelector } from 'react-redux';
import { Box4 } from '../App4';
import { change } from '../store/isVisibleReducer';

export const ChangeContainer = () => {
  const isVisible = useSelector((state) => state.isVisible);
  const dispatch = useDispatch();
  console.log(isVisible);
  return <Box4 isVisible={isVisible} onChange={() => dispatch(change())} />;
};
