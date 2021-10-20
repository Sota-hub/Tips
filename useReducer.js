import { useReducer } from "react";

const defaultState = {
  value: "",
  invalid: null,
};

const reducerFunction = (prevState, dispatchedActionValue) => {
  return defaultState;
};

const [currentState, dispatchFunction] = useReducer(
  reducerFunction,
  defaultState
);

const changeHandler = (event) => {
  dispatchFunction({});
};
