import './Todo.scss'
import React from 'react';

export default function Todo( {text, todo, todos, setTodos} ) {
    function deleteHandler() {
        setTodos(todos.filter((item) => item.id !== todo.id));
    }

    function completedHandler() {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {...item, completed: !item.completed};
            }
            return item;
        }));
    }

    return (
        <div>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                <button onClick={deleteHandler} className="delete-button">×</button>
                <input onClick={completedHandler} type="checkbox" defaultChecked={`${todo.completed ? "checked" : ""}`} /> 
                <p>{text}</p>
            </li>
        </div>
    );
}