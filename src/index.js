import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import AddForm from './todoForm.js';
import TodoList from './todoList.js';
import useTodoState from './useTodoState.js';

const App = () => {
    const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
       Todo list
          </Typography>
          <TodoList todos={todos}
              deleteTodo={deleteTodo}

          />
          <AddForm saveToDo={todoText => {
              const trimmedText = todoText.trim();
              if (trimmedText.length > 0) {
                  addTodo(trimmedText);
              }
          }} />
          
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
