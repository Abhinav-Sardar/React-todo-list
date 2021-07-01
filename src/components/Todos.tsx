import { useContext, useState } from "react";
import { FC, Fragment } from "react";
import { TodosContext } from "../App";
import Todo, { todoProps } from "./Todo";
const Todos: FC = () => {
  const [todos, setTodos] = useContext(TodosContext);
  return (
    <Fragment>
      {todos.map((todo: todoProps) => (
        <Todo
          task={todo.task}
          isDeadline={todo.isDeadline}
          deadline={todo.deadline}
        />
      ))}
    </Fragment>
  );
};
export default Todos;
