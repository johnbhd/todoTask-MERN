import { createContext, useReducer, ReactNode, Dispatch } from "react";
interface Todo {
    _id: string;
    title: string;
    task: string; 
    createdAt: string;
    [key: string]: any;
}
  
interface TodoState {
    todo: Todo[] | null;
}
type TodoAction = 
    | { type: "SET_TODO"; payload: Todo[] }
    | { type: "CREATE_TODO"; payload: Todo }
    | { type: "UPDATE_TODO"; payload: Todo }
    | { type: "DELETE_TODO"; payload: { _id: string}}

export const TodoContext = createContext<{
    todo: Todo[] | null;
    dispatch: Dispatch<TodoAction>;
} | null>(null);

export const todoReducer = (state: TodoState, action: TodoAction) => {
    switch (action.type) {
        case 'SET_TODO':
            return {
                todo: action.payload,
            };

        case 'CREATE_TODO':
            return {
                todo: [action.payload, ...(state.todo || [])],
            };
        case 'UPDATE_TODO': 
            return {
                
                todo: (state.todo || []).map((todo) =>
                    
                    todo._id === action.payload._id ? action.payload : todo
                ),
            };
        case 'DELETE_TODO':
            return {
                todo: state.todo?.filter((w) => w._id !== action.payload._id) || null,
            };
        default: 
            return state;
    }
};


interface TodoContextProviderProps {
    children: ReactNode;    
}
export const TodoContextProvider: React.FC<TodoContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, {
        todo: null
    })


    return (
        <TodoContext.Provider value={{ todo: state.todo, dispatch}}>
            { children }
        </TodoContext.Provider>
    );
}

