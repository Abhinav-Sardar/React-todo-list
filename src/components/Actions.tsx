import { useContext, useRef } from "react";
import { FC, Fragment } from "react";
import { TodosContext } from "../App";
import { todoProps } from "./Todo";

const Actions: FC<Props> = ({ index }) => {
  const currentDeletedTodoRef = useRef<null | HTMLElement>();
  const [todos, setTodos] = useContext(TodosContext);
  const handleFinished = (index: number) => {
    console.log(index);
    const newTodos = todos.filter((todo: todoProps, paramindex: number) => {
      if (paramindex + 1 !== index) return todo;
    });
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <div className="icon__wrapper">
        <i
          className="fas fa-check"
          style={{
            color: "lime",
          }}
          onClick={() => {
            handleFinished(index);
          }}
        ></i>
        <i
          className="fas fa-times"
          style={{
            color: "red",
          }}
          onClick={() => {
            handleFinished(index);
          }}
        ></i>
      </div>
    </Fragment>
  );
};
export default Actions;

interface Props {
  index: number;
}
