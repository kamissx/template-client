import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/main";
import Cadastro from "./pages/cadastro";
import Doces from "./pages/doces";
import Login from "./pages/login";

function App(){
   return(
       <BrowserRouter>
       <Routes>
           <Route  path="/" exact element = {< HomePage />}/>
           <Route  path="/registrar"  element = {< Cadastro />}/>
           <Route  path="/doces"  element = {< Doces/>}/>
           <Route  path="/login"  element = {< Login/>}/>
           </Routes>
       </BrowserRouter>
   )
}

export default App;