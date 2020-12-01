import React from "react";
import "./PokemonList.css";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "react-bootstrap";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      <Table borderless hover>
        <thead>
          <tr>
            <td>
              <strong>Name</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((p) => (
            <tr key={p}>
              <td className="pokemon">{p}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PokemonList;
