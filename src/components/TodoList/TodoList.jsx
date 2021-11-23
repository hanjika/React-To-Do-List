import './TodoList.scss';
import React from 'react';
import Todo from '../Todo/Todo';

export default function TodoList( { todos, setTodos } ) {
  return(
    <div className="list-div">
      <h3>Todos</h3>
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo key={todo.id} text={todo.text} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  ); 
}