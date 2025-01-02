import { useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

export default function AddTask() {
  const [title, setTitle] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const { dispatch } = useTodoContext();

  interface ApiResponse {
    error?: string;
    task?: {
      _id: string;
      title: string;
      task: string;
      createdAt: string;
    };
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!title || task === "") {
      setError("All fields are required");
      return;
    }

    const newTask = { title, task };

    try {
      const response = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json: ApiResponse = await response.json();

      if (!response.ok) {
        setError(json.error || "An error occurred");
        return;
      }

      if (response.ok && json.task) {
        setError(null);
        setTitle("");
        setTask("");
        dispatch({ type: "CREATE_TODO", payload: json.task });
        console.log("Task added:", json.task);
      }
    } catch (error) {
      setError("An error occurred, please try again!");
    }
  };

  return (
    <form action="post" onSubmit={handleSubmit}>
      <div className="h-[30vh] w-[60vh] mt-[-0.5vh] relative right-6">
        <h3 className="font-bold text-[6vh]">Add Task</h3>
        <br />
        <div className="ml-6">
          {error && <div className="text-red-500">{error}</div>}
          <br />
          <label className="font-bold text-[3vh]">Task:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="shadow-md p-1 mt-3"
          />
          <br />
          <br />
          <label className="font-bold text-[3vh]">Description:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            className="shadow-md p-1 mt-3"
          />
          <br />
          <br />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
