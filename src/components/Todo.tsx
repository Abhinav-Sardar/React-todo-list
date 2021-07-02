import { FC, Fragment } from "react";
import styles from "./css/Todo.module.css";
import Actions from "./Actions";

export interface todoProps {
  task: string;
  isDeadline?: boolean;
  deadline?: Date;
  index?: number;
}

const Todo: FC<todoProps> = ({ task, isDeadline, deadline, index }) => {
  return (
    <Fragment>
      <div className={styles.todo}>
        <div className={styles.index}>{index}.</div>
        <div className={styles.task}>{task}</div>
        <Actions index={index!} />
      </div>
    </Fragment>
  );
};
export default Todo;
