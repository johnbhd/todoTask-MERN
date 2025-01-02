import { useEffect, useState } from "react";
import TodoDetail from '../components/TodoDetail';
import AddTask from "../components/AddTask";
interface Todo {
  _id: string;
  title: string;
  task: string;  // Use 'task' here as the field name
  completed: boolean;
  createdAt: string;
}

const Home = () => {
  const [todos, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch('/api/todo');
      const json = await response.json();

      if (response.ok) {
        setTodo(json);
      }
    };

    fetchTodo();
  }, []);

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