import { useState } from "react";
import { useContext } from "react";
import { FC, Fragment, createContext, Dispatch, SetStateAction } from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import "./globals.css";
import { todoProps } from "./components/Todo";
import Todos from "./components/Todos";
import { ScrollWrapper } from "react-bottom-scroll";
export const TodosContext = createContext<todoProps[] | any>([]);
const App: FC = () => {
  const todos = useState<todoProps[] | []>([]);
  return (
    <Fragment>
      <ScrollWrapper
        wrapperStyle={{
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
          overflowY: "auto",
        }}
        smoothBehavior
      >
        <div className="all__wrapper">
          <Header />
          <TodosContext.Provider value={todos}>
            <AddTodo />
            <Todos />
          </TodosContext.Provider>
        </div>
      </ScrollWrapper>
    </Fragment>
  );
};
export default App;
