import { useState } from "react";
import { Button , ListGroup, FormControl } from "react-bootstrap";


import { useSelector } from "react-redux";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
export default function TodoList() {

    const { todos } = useSelector((state: any) => state.todosReducer);

    // const [todos, setTodos] = useState([
    //     { id: "1", title: "Learn React" },
    //     { id: "2", title: "Learn Node"  }]);
    // const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
    // const addTodo = (todo: any) => {
    //     const newTodos = [ ...todos, { ...todo,
    //     id: new Date().getTime().toString() }];
    //     setTodos(newTodos);
    //     setTodo({id: "-1", title: ""});
    // };
    // const deleteTodo = (id: string) => {
    //     const newTodos = todos.filter((todo) => todo.id !== id);
    //     setTodos(newTodos);
    // };
    // const updateTodo = (todo: any) => {
    //     const newTodos = todos.map((item) =>
    //     (item.id === todo.id ? todo : item));
    //     setTodos(newTodos);
    //     setTodo({id: "-1", title: ""});
    // };

  return (
    <div id="wd-todo-list-redux" className="ms-4" style={{ maxWidth: '600px' }}>


      <h2>Todo List</h2>
      <ListGroup>
        
        <TodoForm />
        {/* <TodoForm
          todo={todo}
          setTodo={setTodo}
          addTodo={addTodo}
          updateTodo={updateTodo}/> */}
        {todos.map((todo: any) => (
        //   <TodoItem
        //     todo={todo}
        //     deleteTodo={deleteTodo}
        //     setTodo={setTodo} />
        <TodoItem todo={todo} />
        
        ))}
      </ListGroup>
<hr/></div>);}




export function TodoList_first() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node"  }]);
  const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
  const addTodo = (todo: any) => {
    const newTodos = [ ...todos, { ...todo,
      id: new Date().getTime().toString() }];
    setTodos(newTodos);
    setTodo({id: "-1", title: ""});
  };
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const updateTodo = (todo: any) => {
    const newTodos = todos.map((item) =>
      (item.id === todo.id ? todo : item));
    setTodos(newTodos);
    setTodo({id: "-1", title: ""});
  };
  return (
    <div className="ms-4" style={{ maxWidth: '600px' }}>
      <h2>Todo List</h2>
      <ListGroup >
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
        {/* //"d-flex align-items-left gap-2"> */}
          <FormControl value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            style={{ maxWidth: '60%' }}
            />
          
        <div className="d-flex gap-2">
          <Button 
                  style={{ backgroundColor: '#ffc107', color: 'black', border: 'none' }}
                  onClick={() => updateTodo(todo)}
                  id="wd-update-todo-click"> Update </Button>
          <Button 
                  variant="success"
                  onClick={() => addTodo(todo)}
                  id="wd-add-todo-click"> Add </Button>
        </div>
        </ListGroup.Item>


        {todos.map((todo) => (
          <ListGroup.Item className="d-flex justify-content-between align-items-center"
        //   "d-flex gap-2"
           key={todo.id}>
            {todo.title}
            <div className="d-flex gap-2">
            <Button onClick={() => setTodo(todo)}
                    id="wd-set-todo-click"> Edit </Button>
            <Button 
                    variant="danger"
                    onClick={() => deleteTodo(todo.id)}
                    id="wd-delete-todo-click"> Delete </Button>
            </div>
            
          </ListGroup.Item>
        ))}
      </ListGroup><hr/>
</div>);}