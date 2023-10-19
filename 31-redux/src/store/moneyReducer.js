const DEPOSIT = 'bank/deposit';
const WITHDRAW = 'bank/withdraw';

export const deposit = (payload) => ({ type: DEPOSIT, payload });
export const withdraw = (payload) => ({ type: WITHDRAW, payload });

const initialState = {
  money: 0,
};

const moneyReducer = (state = initialState, action) => {
  // console.log(action.payload);
  // console.log('money > ', state.money);

  switch (action.type) {
    case DEPOSIT:
      return { money: state.money + action.payload };
    case WITHDRAW:
      return { money: state.money - action.payload };
    default:
      return { money: state.money };
  }
};

export default moneyReducer;
