import Main from "./components/Main";
import AuthenticationPage from "./Auth/AuthenticationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<AuthenticationPage/>} path="/auth" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
