import { UsState, UsAction, UsActionType } from "../../types/types";

const defaultState: UsState = {
  persons: [
    {
      id: 1,
      name: "Максим Золотин",
      prof: "Администратор",
      img: "../../src/assets/1.png",
    },
    {
      id: 2,
      name: "Максим Золотин",
      prof: "Администратор",
      img: "../../src/assets/2.png",
    },
    {
      id: 3,
      name: "Максим Золотин",
      prof: "Администратор",
      img: "../../src/assets/3.jpg",
    },
    {
      id: 4,
      name: "Максим Золотин",
      prof: "Администратор",
      img: "../../src/assets/4.jpg",
    },
    {
      id: 5,
      name: "Максим Золотин",
      prof: "Администратор",
      img: "../../src/assets/5.png",
    },
    {
      id: 6,
      name: "Максим Золотин",
      prof: "Администратор",
      img: "../../src/assets/6.jpg",
    },
  ],
  sneakersMain: [],
  customers: [],
  caseZakaz: [],
  models: [
    {
      id: 1,
      name: "Кеды",
    },
    {
      id: 2,
      name: "Кеды",
    },
    {
      id: 3,
      name: "Кеды",
    },
    {
      id: 4,
      name: "Кеды",
    },
    {
      id: 5,
      name: "Кеды",
    },
    {
      id: 6,
      name: "Кеды",
    },
  ],
  loading: false,
  error: null,
};

export const customerReducer = (
  state = defaultState,
  action: UsAction
): UsState => {
  switch (action.type) {
    case UsActionType.ADD_CUSTOMER:
      return {
        ...state,
        sneakersMain: action.payload,
      };
    case UsActionType.ADD_MESSAGE:
      return {
        ...state,
        customers: action.payload,
      };
    case UsActionType.ADD_ZAKAZ:
      // console.log("1");
      return {
        ...state,
        caseZakaz: action.payload,
      };
    case UsActionType.LOAD_CUSTOMER:
      return {
        ...state,
        loading: action.payload,
      };
    case UsActionType.ERROR_CUSTOMER:
      return {
        ...state,
        error: action.payload,
      };
    case UsActionType.SET_ZAKAZ:
      return {
        ...state,
      };
    //   return { ...state, customers: [...state.customers, action.payload] };
    case UsActionType.REMOVE_CUSTOMER:
      // console.log("1");
      return {
        ...state,
        caseZakaz: state.caseZakaz.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
// export const remoteCustomerAction = (payload) => ({
//   type: REMOVE_CUSTOMER,
//   payload,
// });
