import { FC, Fragment } from "react";

export interface todoProps {
  task: string;
  isDeadline?: boolean;
  deadline?: Date;
}

const Todo: FC<todoProps> = ({ task, isDeadline, deadline }) => {
  return (
    <Fragment>
      <h1>{task}</h1>
    </Fragment>
  );
};
export default Todo;
