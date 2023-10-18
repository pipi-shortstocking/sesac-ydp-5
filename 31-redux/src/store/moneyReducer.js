const DEPOSIT = 'bank/deposit';
const WITHDRAW = 'bank/withdraw';

export const deposit = (money) => ({ type: DEPOSIT, payload: money });
export const withdraw = (money) => ({ type: WITHDRAW, payload: money });

const initialState = {
  money: 0,
};

const moneyReducer = (state = initialState, action) => {
  console.log(action.payload);

  switch (action.type) {
    case DEPOSIT:
      return { money: state.money + action.payload };
    case WITHDRAW:
      return { money: state.money - action.payload };
    default:
      return state;
  }
};

export default moneyReducer;
