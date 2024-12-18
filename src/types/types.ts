// new tyeps redux
export enum UsActionType {
  ADD_CUSTOMER = "ADD_CUSTOMER",
  REMOVE_CUSTOMER = "REMOVE_CUSTOMER",
  LOAD_CUSTOMER = "LOAD_CUSTOMER",
  ERROR_CUSTOMER = "ERROR_CUSTOMER",
  ADD_MESSAGE = "ADD_MESSAGE",
  ADD_ZAKAZ = "ADD_ZAKAZ",
  SET_ZAKAZ = "SET_ZAKAZ",
}
export interface SneakerType {
  id: number;
  vendorСode: string;
  inStock: number;
  title: string;
  description: string;
  imgUrl: string;
  stars: number;
  sizes: any[];
  price: number;
  oldPrice: number;
  gender: string;
  color: string;
  compound: string;
  country: string;
}
export type TeamType = {
  id: number;
  imgUrl: string;
  name: string;
  role: string;
}[];

export interface UsState {
  customers: any[];
  persons: any[];
  models: any[];
  sneakersMain: any[];
  caseZakaz: any[];
  loading: boolean;
  error: null | string;
}
interface UsAction_ADD_CUSTOMER {
  type: string;
  payload: any;
}
interface UsAction_LOAD_CUSTOMER {
  type: string;
  payload: any[];
}
interface UsAction_ERROR_CUSTOMER {
  type: string;
  payload: string;
}
interface UsAction_REMOVE_CUSTOMER {
  type: string;
  payload: number;
}
interface UsAction_ADD_MESSAGE {
  type: string;
  payload: any[];
}
interface UsAction_ADD_ZAKAZ {
  type: string;
  payload: any[];
}
interface UsAction_SET_ZAKAZ {
  type: string;
  payload: any[];
}
export type UsAction =
  | UsAction_ADD_CUSTOMER
  | UsAction_LOAD_CUSTOMER
  | UsAction_ERROR_CUSTOMER
  | UsAction_REMOVE_CUSTOMER
  | UsAction_ADD_MESSAGE
  | UsAction_ADD_ZAKAZ
  | UsAction_SET_ZAKAZ;
