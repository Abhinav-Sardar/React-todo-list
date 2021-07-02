import { useContext, useRef } from "react";
import { FC, Fragment } from "react";
import { TodosContext } from "../App";
import { todoProps } from "./Todo";
const Actions: FC<Props> = ({ index }) => {
  const [todos, setTodos] = useContext(TodosContext);
  const handleFinished = (index: number) => {
    console.log(index);
    const newTodos = todos.filter((todo: todoProps, paramindex: number) => {
      if (paramindex + 1 !== index) return todo;
    });
    setTodos(newTodos);
  };

  const completeRef = useRef<HTMLLIElement>();
  const deleteRef = useRef();
  return (
    <Fragment>
      <div className="icon__wrapper">
        <i
          className="fas fa-check"
          style={{
            color: "lime",
          }}
          //@ts-ignore
          ref={completeRef}
          onClick={() => {
            //@ts-ignore
            completeRef.current.style.backgroundColor = "blue";
          }}
        ></i>
        <i
          className="fas fa-times"
          style={{
            color: "red",
          }}
          //@ts-ignore
          ref={deleteRef}
        ></i>
      </div>
    </Fragment>
  );
};
export default Actions;

interface Props {
  index: number;
}
