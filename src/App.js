import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AppContext } from "./lib/contextLib";

import Login from './pages/login/login.js';
import Cadastro from "./pages/cadastro/cadastro.js"
import MeusJogos from './pages/meus-jogos/meus-jogos.js';
import MinhaConta from './pages/minha-conta/minha-conta';
import TodosJogos from './pages/todos-jogos/todos-jogos';


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Router>           
          <Route path='/login' component={Login}/>
          <Route path='/cadastro' component={Cadastro}/>
          <Route path='/meus-jogos' component={MeusJogos}/>
          <Route path='/todos-jogos' component={TodosJogos}/>
          <Route path='/minha-conta' component={MinhaConta}/>
        </Router>
      </AppContext.Provider>
  );
}


export default App;
