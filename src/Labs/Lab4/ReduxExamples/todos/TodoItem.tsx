import { ListGroup, Button } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";


export default function TodoItem({ todo
    // deleteTodo, setTodo }: {
    // todo: { id: string; title: string };
    // deleteTodo: (id: string) => void;
    // setTodo: (todo: { id: string; title: string }) => void;
}) {
//   const { todo } = useSelector((state: any) => state.todosReducer);  
  const dispatch = useDispatch();
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center"
        key={todo.id}>
        {todo.title || <span>&nbsp;</span>} 

        {/* added the span or part so that buttons will remain to the right even if title is empty */}
        
        <div className="d-flex gap-2">
        <Button onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click"> Edit </Button>
        <Button 
                variant="danger"
                onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"> Delete </Button>
        </div>

      
        </ListGroup.Item>);}




// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTodo, setTodo } from "./todosReducer";
// export default function TodoItem({ 
//  }) {
    
//   const { todo } = useSelector((state: any) => state.todosReducer);
//   const dispatch = useDispatch();
//   return (
//     <ListGroup.Item key={todo.id}>
//       <Button onClick={() => dispatch(deleteTodo(todo.id))}
//               id="wd-delete-todo-click"> Delete </Button>
//       <Button onClick={() => dispatch(setTodo(todo))}
//               id="wd-set-todo-click"> Edit </Button>
//       {todo.title}
//     </ListGroup.Item>
// );}
