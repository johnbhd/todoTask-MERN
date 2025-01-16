import { useEffect } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
  
import TodoDetail from '../components/TodoDetail';
import AddTask from "../components/AddTask";

interface Todo {
  _id: string;
  title: string;
  task: string;  // Use 'task' here as the field name
  createdAt: string;
  updatedAt: string;
}


const Home: React.FC = () => { 
  const { todo: todos, dispatch } = useTodoContext();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
          const response = await fetch('/api/todo');
          const json: Todo[] = await response.json();
    
          if (response.ok) {
            dispatch({ type: 'SET_TODO', payload: json })
          }
      }
      catch(error) {
        console.error("Failed to fetch Todo: ", error)
      }
    
    };

    fetchTodo();
  }, [dispatch]);

  return (
    <div className="home min-h-screen flex py-10 mx-[10vh]">
       <div className="mt-4">
        <AddTask/>
      </div>
      <div className="container mt-[15vh]">
        {todos && todos.map((todo) => (
          <TodoDetail key={todo._id} todo={todo} /> 
        ))}
      
      </div>
    
    </div>
  );
};

export default Home;
