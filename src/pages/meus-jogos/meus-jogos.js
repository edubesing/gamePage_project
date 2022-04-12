import React from "react";
import SideBar from "../../components/sidebar/sidebar.js";
import TabelaJogos from "../../components/tabela-jogos/tabela-jogos.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./meus-jogos.css";

function MeusJogos() {

  return (
    <div className="d-flex justify-content-center meus-jogos-body">
      <SideBar/>
        <div className="container-jogos">
          <h1>Meus Jogos</h1>
          <TabelaJogos/>
          </div>
    </div>
  );
}
export default MeusJogos;
