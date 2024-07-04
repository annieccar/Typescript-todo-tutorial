import { useReducer } from "react";

import { Todo } from "../Components/model";

type Actions =
  | {
      type: "add";
      payload: string;
    }
  | {
      type: "remove";
      payload: number;
    }
  | {
      type: "done";
      payload: number;
    };

const todoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "remove":
      return state.filter((elem) => elem.id !== action.payload);
    case "done":
      return state.map((elem) =>
        elem.id === action.payload ? { ...elem, isDone: !elem.isDone } : elem
      );
  }
};

const useTodoReducer = () => {
  const [state, dispatch] = useReducer(todoReducer, []);
  return [state, dispatch];
};

export default useTodoReducer;
