import React, { FC, Fragment } from "react";
//@ts-ignore"
import styles from "./css/Header.module.css";
const Header: FC = () => {
  return (
    <Fragment>
      <div className={styles.header__wrapper}>
        <h3 className={styles.header}>Todo List</h3>
        <h2>A place to keep track of your work</h2>
        <i className="fab fa-react"></i>
      </div>
    </Fragment>
  );
};
export default Header;
