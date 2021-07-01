import { FC, Fragment } from "react";
import styles from "./css/Todo.module.css";
export interface todoProps {
  task: string;
  isDeadline?: boolean;
  deadline?: Date;
}

const Todo: FC<todoProps> = ({ task, isDeadline, deadline }) => {
  return (
    <Fragment>
      <div className={styles.todo}>{task}</div>
    </Fragment>
  );
};
export default Todo;
