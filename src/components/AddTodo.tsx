import CalendarPicker from "react-date-picker";
import { FC, FormEvent, Fragment, useRef, useState, useContext } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { TodosContext } from "../App";
//@ts-ignore
import styles from "./css/AddTodo.module.css";
import { todoProps } from "./Todo";
import { useEffect } from "react";
const AddTodo: FC = () => {
  const [todos, setTodos] = useContext(TodosContext);
  const inpRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [IsDeadLine, setIsDeadLine] = useState<boolean>(true);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inpRef.current?.value !== "") {
      if (!IsDeadLine) {
        const newTodo: todoProps = {
          task: inpRef.current?.value!,
        };
        //@ts-ignore
        setTodos((prev) => [...prev, newTodo]);
      } else {
        const newTodo: todoProps = {
          task: inpRef.current?.value!,
          isDeadline: true,
          deadline: date,
        };
        //@ts-ignore
        setTodos((prev) => [...prev, newTodo]);
      }
    }
    inpRef.current?.focus();
  };

  function handleDateChange(dateparam: Date) {
    setDate(dateparam);
  }
  return (
    <Fragment>
      <div className={styles.AddTodo__wrapper}>
        <h2>Add todo</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" ref={inpRef} autoFocus />
          <button type="submit" className={styles.btn__submit}>
            <i className="fas fa-plus"></i>
          </button>
        </form>
        <div className={styles.toggle__wrapper}>
          <h3>Deadline?</h3>
          <Toggle
            id="deadline"
            //@ts-ignore
            onChange={(e) => {
              const value = e.target.checked;
              setIsDeadLine(value);
            }}
            checked={IsDeadLine}
          />
        </div>

        <br />
        <div
          className={styles.calendar__wrapper}
          style={{
            display: IsDeadLine === false ? "none" : "block",
          }}
        >
          <CalendarPicker
            value={date}
            onChange={(e) => handleDateChange(e)}
            format={"dd-MM-yyyy"}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default AddTodo;
