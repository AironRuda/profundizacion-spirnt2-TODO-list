import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

function App() {
  return (
    // <div className="h-full flex items-center justify py-20 px-5">
    <div className=" h-100 d-flex align-items-center justify-content-around pt-5">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <Title />
        <TodoInput />
        <TodoList>
          <Todo />
        </TodoList>
      </div>
    </div>
  );
}

export default App;
