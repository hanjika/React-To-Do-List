import './FormTodo.scss';
import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function FormTodo ( { todos, setTodos }) {
    const inputRef = useRef();

    function addTodo(e) {
        e.preventDefault();

        const input = inputRef.current;
        if (input.value !== "") {
            setTodos([...todos, {id: uuidv4(), text: input.value, completed: false}]);
        } else {
            alert('Input is empty');
        }
    };

    return (
        <form>
            <input ref={inputRef} type="text" name="input" placeholder="Write a new Todo"></input>
            <br />
            <button onClick={addTodo}>Add Todo</button>
        </form>
    );
}
