import { FC } from 'react';
import { useTodoContext } from '../hooks/useTodoContext';

interface Todo {
    _id: string;
    title: string;
    task: string;  // Ensure that this matches the data structure
    createdAt: string;
  }
interface TodoDetailProps {
    todo: Todo;
}
  const TodoDetail: FC<TodoDetailProps> = ({ todo }) => {
    const { dispatch } = useTodoContext();

    const handleClick = async () => {
      try {
        const response = await fetch(`/api/todo/${todo._id}`, {
            method: 'DELETE',
          });
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: 'DELETE_TODO', payload: json });
        } 
      } catch (error) {
        console.error('Error deleting content:  ', error);
      }
    };

    return (
      <div className="todo h-[30vh] p-10 bg-slate-100 shadow-md mt-10 relative bottom-[5vh] leading-[5vh]">
        <div className='flex justify-between items-center'>
            <h2 className="text-[4vh]"><strong>Task: </strong>{todo.title}</h2>
              <button onClick={handleClick} className='text-red-700 cursor-pointer'>
                  Delete
              </button>
        </div>
        <div className="m-4">
          <li className='text-[21px]'>{todo.task}</li>
          <p className='text-[11px] ml-1'>{new Date(todo.createdAt).toLocaleDateString()}</p>
       
        </div>
     
      </div>
    );
  };
  
  export default TodoDetail;
  