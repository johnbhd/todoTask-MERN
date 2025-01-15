import { createContext, useState } from "react";
interface TodoContextType {
    _id: string;
    title: string;
    task: string; 
    createdAt: string;
  }
  
export const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoContextProviderProps {
    children: ReactNode;    
}
export const TodoContextProvider: React.FC<TodoContextProviderProps> = ({ children }) => {
    const [todos, setTodos] = useState<string[]>([]);
    return (
        <TodoContext.Provider value={{ todos, setTodos}}>
            { children }
        </TodoContext.Provider>
    );
}

