interface Todo {
    _id: string;
    title: string;
    task: string;  // Ensure that this matches the data structure
    createdAt: string;
  }
  
  const TodoDetail = ({ todo }: { todo: Todo }) => {
    return (
      <div className="todo h-[30vh] p-10 bg-slate-100 shadow-md mt-10 relative bottom-[5vh] leading-[5vh]">
        <h2 className="text-[4vh]"><strong>Task: </strong>{todo.title}</h2>
        <div className="m-4">
          <h6>{todo.task}</h6>
          <p>{todo.createdAt}</p>
        </div>
      </div>
    );
  };
  
  export default TodoDetail;
  