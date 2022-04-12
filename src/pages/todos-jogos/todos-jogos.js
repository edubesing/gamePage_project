import React from "react";
import SideBar from "../../components/sidebar/sidebar.js";
import TabelaJogos from "../../components/tabela-jogos/tabela-jogos.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./todos-jogos.css";

function TodosJogos() {

  return (
    <div className="d-flex justify-content-center meus-jogos-body">
      <SideBar/>
        <div className="container-jogos">
          <h1>Todos Jogos</h1>
          <TabelaJogos/>
          </div>
    </div>
  );
}
export default TodosJogos;
