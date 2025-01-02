import { createContext, useReducer, ReactNode, Dispatch } from "react";

interface Todo {
  _id: string;
  title: string;
  task: string;
  createdAt: string;
}

interface TodoState {
  todos: Todo[] | null;
}

type TodoAction =
  | { type: "SET_TODO"; payload: Todo[] }
  | { type: "CREATE_TODO"; payload: Todo };

interface TodoContextValue extends TodoState {
  dispatch: Dispatch<TodoAction>;
}

export const TodoContext = createContext<TodoContextValue | undefined>(undefined);

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "SET_TODO":
      return {
        todos: action.payload,
      };
    case "CREATE_TODO":
      return {
        todos: [action.payload, ...(state.todos || [])],
      };
    default:
      return state;
  }
};

interface TodoContextProviderProps {
  children: ReactNode;
}

export const TodoContextProvider: React.FC<TodoContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: null });

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
