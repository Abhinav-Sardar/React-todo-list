import { useContext, useState } from "react";
import { FC, Fragment } from "react";
import { TodosContext } from "../App";
import Todo, { todoProps } from "./Todo";
import styles from "./css/Todo.module.css";

const Todos: FC = () => {
  const [todos, setTodos] = useContext(TodosContext);
  return (
    <Fragment>
      <div className={styles.todo__wrapper}>
        {todos.map((todo: todoProps, index: number) => (
          <Todo
            task={todo.task}
            isDeadline={todo.isDeadline}
            deadline={todo.deadline}
            index={index + 1}
          />
        ))}
      </div>
    </Fragment>
  );
};
export default Todos;
