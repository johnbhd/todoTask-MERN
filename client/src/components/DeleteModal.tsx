import { FC } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  todo: {
    _id: string;
    title: string;
    task: string;  
    createdAt: string;
}
}

const DeleteModal: FC<DeleteModalProps> = ( { isOpen, onClose, todo }) => {
  const { dispatch } = useTodoContext();

  const handleClick = async () => {
    try {
      const response = await fetch(`/api/todo/${todo._id}`, {
          method: 'DELETE',
        });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'DELETE_TODO', payload: json });
        onClose()
      } 
    } catch (error) {
      console.error('Error deleting content:  ', error);
    }
  };
  if (!isOpen) return null;
  return (
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
          onClick={onClose}
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none rounded-lg"
        >
          Cancel
        </button>
      </div>  
      </div>
    </div>
  )
}

export default DeleteModal