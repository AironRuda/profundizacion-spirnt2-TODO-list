import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <div className="h-full flex items-center justify py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput />
      </div>
    </div>
  );
}

export default App;
