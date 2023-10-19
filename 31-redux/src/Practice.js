import { useState } from 'react';
import { MoneyContainer } from './containers/MoneyContainer';

function Practice() {
  return (
    <div className="Practice">
      <h1>React Redux 실습</h1>
      <hr />
      <h1>코딩온 은행</h1>
      <MoneyContainer />
    </div>
  );
}

export const Bank = ({ money, onDiposit, onWithDraw }) => {
  const [cash, setCash] = useState(0);

  return (
    <div>
      <h2>잔액 : {money}원</h2>
      <input type="text" onChange={(e) => setCash(e.target.value)} />
      <button onClick={() => onDiposit(parseInt(cash))}>입금</button>
      <button onClick={() => onWithDraw(parseInt(cash))}>출금</button>
    </div>
  );
};

export default Practice;
