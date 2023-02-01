import { Action } from "../types";

const initiallState = { city: "Lviv" };

export default function todosReducer(state = initiallState, action: Action) {
  switch (action.type) {
    case "changeOnAnotherCity": {
      return { city: action.payload };
    }
    default:
      return state;
  }
}
