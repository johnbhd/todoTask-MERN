import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import UpdateModal from './UpdateModal';
import DeleteModal from './DeleteModal';

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
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
    const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false)


  
    return (
  
      <div className="todo h-[30vh] p-10 bg-slate-100 shadow-md mt-10 relative bottom-[5vh] leading-[5vh] ">
        <div className='tasking justify-between items-center'>
            <h2 className="task text-[4vh]"><strong>Task: </strong>{todo.title}</h2>
             <div className="buts flex space-x-5 text-lg"> 
                <button onClick={() => setUpdateModalOpen(true)} className="text-blue-700 cursor-pointer">
                  {editIcon}
                </button>
                <button onClick={() => setDeleteModalOpen(true)} className="text-red-800 cursor-pointer">
                  {deleteIcon}
                </button>
             </div>
        </div>
        <div className="m-4">
          <li className='text-[21px]'>{todo.task}</li>
          <p className='text-[12px] ml-7 mt-2'>{new Date(todo.createdAt).toLocaleDateString()}</p>
       
        </div>
        <DeleteModal 
          isOpen = {deleteModalOpen}
          onClose= { () => setDeleteModalOpen(false)}
          todo = {todo}
          />
   
        <UpdateModal 
          isOpen = {updateModalOpen}
          onClose= { () => setUpdateModalOpen(false)}
          todo = {todo}
          />
      </div>
    );
  };
  
  export default TodoDetail;
  