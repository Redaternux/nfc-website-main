import Main from "./components/Main";
import AuthenticationPage from "./Auth/AuthenticationPage";
import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";


function App() {
  return (
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<AuthenticationPage/>} path="/auth" />
        <Route path="/Login" component={<Login/>} />
        <Route path="/register" component={<Register/>} />
      </Routes>
  );
}

export default App;
