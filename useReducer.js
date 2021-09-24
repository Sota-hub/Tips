import { useReducer } from "react";

const reducerFunction = (prevState, dispatchedActionValue) => {};

const [currentState, dispatchFunction] = useReducer(reducerFunction, {
  value: "",
  isValid: null,
});

const changeHandler = (event) => {
  dispatchFunction({});
};
