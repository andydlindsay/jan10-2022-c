const TaskListItem = ({todo, onUpdate, onDelete}) => {
  // console.log('props in TaskListItem', props);
  // const { todo } = props;
  // const {task, id, isComplete} = todo;

  return (
    <div>
      <h2>Task: {todo.task} ({todo.id})</h2>
      <h4>Status: {todo.isComplete ? 'done' : 'incomplete'}</h4>
      <button onClick={onUpdate}>Toggle Complete</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TaskListItem;
