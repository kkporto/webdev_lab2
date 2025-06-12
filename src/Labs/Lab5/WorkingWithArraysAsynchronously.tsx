import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { FaPlusCircle, FaTrash } from "react-icons/fa";

import * as client from "./client";
export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };


    const toggleCompleted = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
    const createTodo = async () => {
    const todos = await client.createTodo();
    setTodos(todos);
  };


  
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      <h4>Todos 
        <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3"
                         id="wd-create-todo" /> </h4>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>
            
            <FaTrash onClick={() => removeTodo(todo)}
                     className="text-danger float-end mt-1" id="wd-remove-todo"/>
            <input type="checkbox" className="form-check-input me-2"
                   checked={todo.completed}
                   onChange={() => toggleCompleted(todo.id)}
                   />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
               {todo.title}
            </span> 
          </ListGroup.Item>
        ))}
      </ListGroup> <hr />
    </div>
);}
