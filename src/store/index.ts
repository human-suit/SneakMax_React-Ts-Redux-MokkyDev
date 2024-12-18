import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { cashReducer } from "./reducers/cashReducer";
import { customerReducer } from "./reducers/customerReducer";
import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension"; для асинк функ
const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
