import { useState, FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useTodoContext } from '../hooks/useTodoContext';

const xMark = <FontAwesomeIcon icon={faXmark} className='text-[4vh] mb-4 relative left-[7vh]' />

interface UpdateModalProps {
    isOpen: boolean;
    onClose: () => void;
    todo: {
        _id: string;
        title: string;
        task: string;  
        createdAt: string;
    }
}

interface ApiResponse {
  error?: string;
  task?: {
    _id: string;
    title: string;
    task: string;
    createdAt: string;
  };
}

const UpdateModal: FC<UpdateModalProps> = ( {isOpen, onClose, todo}) => {
    const { dispatch } = useTodoContext();
    const [title, setTitle] = useState(todo.title)
    const [task, setTask] = useState(todo.task)
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      if (!title || task === "") {
        setError("All fields are required");
        return;
      }
        try {
          const response = await fetch(`/api/todo/${todo._id}`, {
                method: "PATCH",
                body: JSON.stringify({ title, task}),
                headers: {
                  "Content-Type": "application/json",
                },
            });
            const json: ApiResponse = await response.json();
          

            if (!response.ok) {
              setError(json.error || "An error occurred");
              return;
            }

            if(response.ok && json.task) {
                setError(null)
                setTitle("");
                setTask("");
                dispatch({ type: 'UPDATE_TODO', payload: json.task });
                onClose();
            }
        } catch(error) {
            console.log("error", error);
        }
    }
    if (!isOpen) return null;
    return (
      <form onSubmit={handleSubmit}>
          <div className='fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50'>
            <div className="relative bg-white rounded-lg shadow dark:bg-white-700 px-[10vh] py-6 max-w-md">
                <div className='flex flex-none justify-center items-center'>
                  <h3 className="mb-5 text-[4vh] text-black-500 dark:text-black-400 font-bold text-center relative left-2">Update Task</h3>
                  <button
                onClick={onClose}
              >
                {xMark}
              </button>
                </div>     {error && <div className="text-red-500">{error}</div>}
              <div className="flex flex-col gap-4 ">
              <label className="font-bold text-[3vh] dark:text-white">Task:</label>
              <input
                type="text"
                className="shadow-md px-2 border-[0.5px] border-black"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
               />
                <label className="font-bold text-[3vh] dark:text-white">Description:</label>
                <input
                type="text"
                className="shadow-md px-2 border-[0.5px] border-black"
                value={task}
                onChange={(e) => setTask(e.target.value)}
               />
                <button
    
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-7"
          >
            Update
          </button>
            </div>  
            </div>
          </div>
        </form>

        );
}

export default UpdateModal;