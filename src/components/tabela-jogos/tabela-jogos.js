import React from "react";
import { Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./tabela-jogos.css";
import AddGameModal from "../AddGame/AddGame.js";
import EditGameModal from "../EditGame/EditGame.js";

function TabelaJogos() {
    const generos = ["Ação", "Aventura", "Mistério"];

    function handleGenres(genres) {
        return (
        <div>
            {genres.map((genre) => (
            <Badge bg="primary" className="tags">
                {genre}
            </Badge>
            ))}
        </div>
        );
    }

    return (
    <div className="div-tabela">
        <Table className="tabela">
          <thead className="cabecalho">
            <tr>
              <th className="texto-cabecalho largura-pequena">Título</th>
              <th className="texto-cabecalho largura-pequena">Preço</th>
              <th className="texto-cabecalho">Gênero</th>
              <th className="texto-cabecalho add-jogos largura-media d-flex justify-content-end">
                <AddGameModal/>
              </th>
            </tr>
          </thead>
          <tbody className="linhas-tabela">
            <tr className="linhas-tabela">
              <td className="texto-linhas largura-pequena">Dark Souls</td>
              <td className="texto-linhas largura-pequena">R$ 169,95</td>
              <td className="texto-linhas">{handleGenres(generos)}</td>
              <td className="texto-linhas icones-tabela largura-media">
                <EditGameModal />
                <Link to="/"><img className="icons" src="./assets/trash.svg" alt="excluir um jogo" /></Link>
              </td>
            </tr>
            <tr>
              <td className="texto-linhas largura-pequena">Cyber Punk</td>
              <td className="texto-linhas largura-pequena">R$ 349,24</td>
              <td className="texto-linhas">{handleGenres(generos)}</td>
              <td className="texto-linhas icones-tabela largura-media">
                <EditGameModal />
                <Link to="/"><img className="icons" src="./assets/trash.svg" alt="excluir um jogo" /></Link>
              </td>
            </tr>
          </tbody>
        </Table>
        <p className="add-jogos-final d-flex justify-content-center"><AddGameModal/> </p>     
    </div>
  );
}

export default TabelaJogos;