const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

// constants
const app = express();
const port = process.env.PORT || 8001;

// in-memory database
let todos = [
  {
    id: 1,
    task: 'do laundry',
    isComplete: false
  },
  {
    id: 2,
    task: 'mail a letter',
    isComplete: false
  },
  {
    id: 3,
    task: 'workout',
    isComplete: true
  },
  {
    id: 4,
    task: 'shower',
    isComplete: true
  }
];

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('../client/build'));
// app.use(cors());
// app.use(express.urlencoded({extended: false}));

// routes
// CREATE - POST    /todos
app.post('/todos', (req, res) => {
  const task = req.body.task;
  console.log('req.body', req.body);
  const id = Math.random().toString(36).substring(2, 6);

  const newTask = {
    id,
    task,
    isComplete: false
  };

  todos.push(newTask);

  res.status(201).send();
});

// READ   - GET     /todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// UPDATE - PUT     /todos/:id
app.put('/todos/:id', (req, res) => {
  const { task, isComplete } = req.body;
  const id = req.params.id;

  todos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        task,
        isComplete: (isComplete === 'true')
      }
    }
    return todo;
  });

  res.status(201).send();
});

// DELETE - DELETE  /todos/:id
app.delete('/todos/:id', (req, res) => {
  todos = todos.filter((todo) => {
    return todo.id !== req.params.id;
  });

  res.status(200).send();
});

// listen
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
