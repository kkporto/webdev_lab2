// import React from "react";

import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";
// import { TodoList_first } from "./todos/TodoList";


export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList/>
      {/* <TodoList_first/> */}

    </div>
  );
};




// import { useSelector } from "react-redux";
// export default function HelloRedux() {
//   const { message } = useSelector((state: any) => state.helloReducer);
//   return (
//     <div id="wd-hello-redux">
//       <h2>Redux Examples</h2>


//       <h3>Hello Redux</h3>
//       <h4>{message}</h4> <hr />
//     </div>
//   );
// }
