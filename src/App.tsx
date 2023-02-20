//react
import { Routes, Route } from "react-router-dom"
import { useState } from "react";
//compo
import Home from "./pages/Home";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";

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
  const [display, setDisplay] = useState('signIn')

    if(display === 'signIn') {
      return <Signin setDisplay={setDisplay} />
    } else {
      return <Signup setDisplay={setDisplay} />
    }
}