import { useReducer } from "react";

const reducerFunction = (prevState, dispatchedAction) => {};

const [currentState, dispatchFunction] = useReducer(reducerFunction, {
  value: "",
  isValid: null,
});

const changeHandler = (event) => {
  dispatchFunction({});
};
