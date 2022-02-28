import './App.css';
import {useState, useEffect} from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import axios from 'axios';

// const todoArr = [
//   {
//     id: 1,
//     task: 'get the laundry',
//     isComplete: false
//   },
//   {
//     id: 2,
//     task: 'pet the dog',
//     isComplete: true
//   },
// ];

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/todos')
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  const toggleIsComplete = (id) => {
    console.log(`the id ${id} should be toggled`);
    setTodos(() => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    console.log(`the id ${id} should be deleted`);

    setTodos(() => {
      return todos.filter((todo) => todo.id !== id);
    });
    
    // pessimistic update example (wait until the AJAX request has resolved before updating state)
    // axios.delete()
    //   .then(() => {
    //     setTodos(() => {
    //       return todos.filter((todo) => todo.id !== id);
    //     });
    //   });
  };

  const createTodo = (newTask) => {
    console.log('a newTask should be created', newTask);

    const todo = {
      id: 400,
      task: newTask,
      isComplete: false
    };

    setTodos((prev) => {
      // return [...prev].push(newTask);
      return [...prev, todo];
    });
  };
 
  return (
    <div className="App">
      <h2>Welcome to the Todo List</h2>
      <TaskForm createTodo={createTodo}/>
      <TaskList 
        todos={todos} 
        toggleIsComplete={toggleIsComplete} 
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
