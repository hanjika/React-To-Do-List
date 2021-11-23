import './App.scss';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import FormTodo from './components/FormTodo/FormTodo';
import TodoList from './components/TodoList/TodoList';

const LSKEY = "MyTodoApp";

export default function App() {
  const initialState = JSON.parse(window.localStorage.getItem(LSKEY + '.todos')) || [];
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem(LSKEY + '.todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header/> 
      
      <main>
        <FormTodo todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </div>  
  );
}
