import { ListGroup, Button, FormControl } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(
    // { todo, setTodo, addTodo, updateTodo }: {
    // todo: { id: string; title: string };
    // setTodo: (todo: { id: string; title: string }) => void;
    // addTodo: (todo: { id: string; title: string }) => void;
    // updateTodo: (todo: { id: string; title: string }) => void;
    // }

) {
    
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <FormControl value={todo.title}
            onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} 
                // setTodo({ ...todo, title: e.target.value })}
            style={{ maxWidth: '60%' }}
            />
          
        <div className="d-flex gap-2">
          <Button 
                  style={{ backgroundColor: '#ffc107', color: 'black', border: 'none' }}
                  onClick={() => dispatch(updateTodo(todo))}
                  id="wd-update-todo-click"> Update </Button>
          <Button 
                  variant="success"
                  onClick={() => dispatch(addTodo(todo))}
                  id="wd-add-todo-click"> Add </Button>
        </div>


      {/* <Button onClick={() => addTodo(todo)}
              id="wd-add-todo-click"> Add </Button>
      <Button onClick={() => updateTodo(todo)}
              id="wd-update-todo-click"> Update </Button>
      <FormControl value={todo.title}
        onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }/> */}
    </ListGroup.Item>
);}
