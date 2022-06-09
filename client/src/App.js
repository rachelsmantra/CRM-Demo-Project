import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayTodo from "./components/DisplayTodo";
import CreateTodo from "./components/CreateTodo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ backgroundColor: "#dad7cd" }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DisplayTodo />} />
          <Route path="/add-list" element={<CreateTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
