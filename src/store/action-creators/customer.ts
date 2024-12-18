import { Dispatch } from "redux";
import { UsAction, UsActionType } from "../../types/types";

export const customADD = () => {
  return async (dispatch: Dispatch<UsAction>) => {
    try {
      setTimeout(async () => {
        dispatch({ type: UsActionType.LOAD_CUSTOMER, payload: true });
        const response = await fetch(
          "https://1742eb39e7f44ae8.mokky.dev/sneakers"
        );
        const data = await response.json();
        dispatch({ type: UsActionType.ADD_CUSTOMER, payload: data });
      }, 500);
    } catch (e) {
      dispatch({ type: UsActionType.ERROR_CUSTOMER, payload: "Error" });
    }
  };
};

export function setZakaz(mas: any) {
  // console.log(mas);
  return { type: UsActionType.ADD_ZAKAZ, payload: mas };
}

export function setADD(mas: any) {
  return { type: UsActionType.ADD_CUSTOMER, payload: mas };
}

export async function messageADD(mas: any) {
  try {
    // console.log(mas);
    let response = await fetch("https://1742eb39e7f44ae8.mokky.dev/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(mas),
    });
    let result = await response.json();
  } catch (e) {
    console.log(e);
  }
}
export function delADD(id: number) {
  // console.log(id);
  return { type: UsActionType.REMOVE_CUSTOMER, payload: id };
}
