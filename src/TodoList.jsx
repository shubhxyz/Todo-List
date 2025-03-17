import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevtodos) => {
            return [...prevtodos, { task: newTodo, id: uuidv4(), isDone: false }]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    let markAllDone = () => {
       setTodos( (prevTodos) => 
            prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            };
        })
    );
    };

    let markAsDone = (id) => {
        setTodos( (prevTodos) => 
            prevTodos.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo,
                    isDone: true,
                };
            } else {
                return todo;
            }  
        })
    );
    }

    return (
        <div>
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>


            <hr></hr>
            <h3> Tasks Todo :-</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                    <span style = {todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => markAsDone(todo.id)}>Mark As Done</button> 
                    &nbsp;
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button> 
                </li>

                ))}
            </ul>
            <br></br>
            <button onClick={markAllDone}>Mark All As Done</button>
        </div>
    );
}