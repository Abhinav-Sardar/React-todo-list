import { useState } from "react";
import { useContext } from "react";
import { FC, Fragment, createContext, Dispatch, SetStateAction } from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import "./globals.css";
import { todoProps } from "./components/Todo";
import Todos from "./components/Todos";

export const TodosContext = createContext<todoProps[] | any>([]);
const App: FC = () => {
  const todos = useState<todoProps[] | []>([]);
  return (
    <Fragment>
      <div className="all__wrapper">
        <Header />
        <TodosContext.Provider value={todos}>
          <AddTodo />
          <Todos />
        </TodosContext.Provider>
      </div>
    </Fragment>
  );
};
export default App;
