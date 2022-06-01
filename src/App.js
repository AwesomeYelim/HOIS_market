import Main from "./pages/Main";
import Login from "./pages/Login"
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
  <>
      <Main />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
  </>
    
  );
}

export default App;
