interface UsState {
  cash: number;
}

const defaultState: UsState = {
  cash: 0,
};

export const cashReducer = (
  state = defaultState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case "Add_cash":
      return { ...state, cash: state.cash + action.payload };
    case "Get_Cash":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};
