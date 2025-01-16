import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";

interface Todo {
    _id: string;
    title: string;
    task: string; 
    createdAt: string;
}
interface TodoContextType {
    todo: Todo[] | null;
    dispatch: React.Dispatch<any>;
}

export const useTodoContext = (): TodoContextType => {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error("useTodoContext must be used inside a TodoContextProvider");
    }
    return context;
};
