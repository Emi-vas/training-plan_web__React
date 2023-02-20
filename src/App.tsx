//react
import { Routes, Route } from "react-router-dom"
import { useState } from "react";
//compo
import Home from "./pages/Home";
import Signin from "./components/auth/Signin";

const App = () => {
  const user = false

  return (
    <Routes>
        <Route path="/" element={ user ? <Home /> : <Signinup /> }/>
    </Routes>
  );
};

export default App;


const Signinup = () => {
  const [display, setDisplay] = useState('signin')

    if(display === 'signin') {
      return <Signin setDisplay={setDisplay} />
    } else {
      return <div>Signup</div>
    }
}