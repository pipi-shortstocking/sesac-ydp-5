import { useDispatch, useSelector } from 'react-redux';
import { Bank } from '../Practice';
import { deposit, withdraw } from '../store/moneyReducer';

export const MoneyContainer = () => {
  const money = useSelector((state) => state.bank.money);
  const dispatch = useDispatch();

  return (
    <Bank
      money={money}
      onDiposit={(cash) => dispatch(deposit(cash))}
      onWithDraw={(cash) => dispatch(withdraw(cash))}
    />
  );
};
