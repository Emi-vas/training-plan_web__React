//react
import { Routes, Route } from "react-router-dom"
import { useState } from "react";
//compo
import Home from "./pages/Home";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Dashboard from "./pages/Dashboard";
import CreateTraining from "./pages/CreateTraining";
//firebase
import { useAuth } from "./auth/UserContext";

const App = () => {
  const { user } = useAuth()

  return (
    <>
      <Routes>
          <Route path="/" element={ user ? <Home /> : <Signinup /> }/>
          <Route path="/tableau-de-bord" element={ user ? <Dashboard /> : <Signinup /> }/>
          <Route path="/creer-entrainement" element={ user ? <CreateTraining /> : <Signinup /> }/>
      </Routes>
    </>
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