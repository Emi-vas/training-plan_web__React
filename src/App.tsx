//react
import { Routes, Route } from "react-router-dom"
//compo
import Home from "./pages/Home";
import Signin from "./components/auth/Signin";

const App = () => {
  const user = false

  return (
    <Routes>
        <Route path="/" element={ user ? <Home /> : <Signin /> }/>
    </Routes>
  );
};

export default App;
