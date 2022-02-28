import {useState} from 'react';

const TaskForm = (props) => {
  const [newTask, setNewTask] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    // alert(newTask);
    if (newTask.length > 10) {
      props.createTodo(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>This is the TaskForm component</h2>

      <form onSubmit={submitHandler}>
        <label>New Task:</label>
        <input 
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <br/>
        <button type="submit">Create!</button>
      </form>
    </div>
  );
};

export default TaskForm;
