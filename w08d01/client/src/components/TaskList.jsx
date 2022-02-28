import TaskListItem from "./TaskListItem";

const TaskList = (props) => {
  console.log(props);

  const mappedTodos = props.todos.map((todo) => {
    return <TaskListItem 
      key={todo.id}
      todo={todo} 
      onUpdate={() => props.toggleIsComplete(todo.id)}
      onDelete={() => props.deleteTodo(todo.id)}
    />
  });

  return (
    <div>
      <h2>This is the TaskList component</h2>

      { mappedTodos }
    </div>
  );
};

export default TaskList;
