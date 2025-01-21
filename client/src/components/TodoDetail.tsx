import { FC, useState } from 'react';
import { useTodoContext } from '../hooks/useTodoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const editIcon = <FontAwesomeIcon icon = {faPenToSquare} />
const deleteIcon = <FontAwesomeIcon icon= {faTrash} />

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
    const [modalOpen, setmodalOpen] = useState<boolean>(false)
    const [updateOpen, setupdateOpen] = useState<boolean>(false)

    const handleClick = async () => {
      try {
        const response = await fetch(`/api/todo/${todo._id}`, {
            method: 'DELETE',
          });
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: 'DELETE_TODO', payload: json });
          setmodalOpen(false)
        } 
      } catch (error) {
        console.error('Error deleting content:  ', error);
      }
    };
  const handleModal = () => {
    setmodalOpen(!modalOpen);
  };
  const updateModal = () => {
    setupdateOpen(!updateOpen)
  }
    return (
  
      <div className="todo h-[30vh] p-10 bg-slate-100 shadow-md mt-10 relative bottom-[5vh] leading-[5vh] ">
        <div className='tasking justify-between items-center'>
            <h2 className="task text-[4vh]"><strong>Task: </strong>{todo.title}</h2>
             <div className="buts flex space-x-5 text-lg"> 
                <button onClick={updateModal} className="text-blue-700 cursor-pointer">
                  {editIcon}
                </button>
                <button onClick={handleModal} className="text-red-800 cursor-pointer">
                  {deleteIcon}
                </button>
             </div>
        </div>
        <div className="m-4">
          <li className='text-[21px]'>{todo.task}</li>
          <p className='text-[12px] ml-7 mt-2'>{new Date(todo.createdAt).toLocaleDateString()}</p>
       
        </div>
        {updateOpen && (
          <div className='fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50'>
            <div className="relative bg-white rounded-lg shadow dark:bg-white-700 px-[10vh] py-6 max-w-md">
                <h3 className="mb-5 text-[4vh] text-black-500 dark:text-black-400 font-bold text-center">Update Task</h3>
              <div className="flex flex-col gap-4 ">
              <label className="font-bold text-[3vh] dark:text-white">Task:</label>
                <input type="text" className='shadow-md px-2 border-[0.5px] border-black'/>
                <label className="font-bold text-[3vh] dark:text-white">Description:</label>
                <input type="text" className='shadow-md px-2 border-[0.5px] border-black'/>
                <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-7"
          >
            Add
          </button>
            </div>  
            </div>
          </div>


        )}
        {modalOpen && (
          <div className='fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50'>
            <div className="relative bg-white rounded-lg shadow dark:bg-white-700 p-6 max-w-md">
                <h3 className="mb-5 text-lg font-normal text-black-500 dark:text-black-400">Do you want to Delete this Task?</h3>
              <div className="flex justify-end space-x-3">
              <button
                onClick={handleClick}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2"
              >
                Yes, delete it
              </button>
              <button
                onClick={handleModal}
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none rounded-lg"
              >
                Cancel
              </button>
            </div>  
            </div>
          </div>


        )}
      </div>
    );
  };
  
  export default TodoDetail;
  