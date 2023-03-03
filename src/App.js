import React from 'react';
import Pokemon from "./components/pokemon";

let num_poke = 1;

function App() {
  const [pokemon, setPokemon] = React.useState({});

  function Proximo(){
    num_poke = num_poke + 1;
    Carregar()
  }

  function Voltar(){
    if(num_poke != 1)
      num_poke = num_poke - 1;
    Carregar()
  }

  function Carregar(){
    fetch('https://pokeapi.co/api/v2/pokemon/' + num_poke)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setPokemon(data);
    });
  }

  return (
    pokemon.sprites ?
      <div class=" col-md-12 text-center d-flex align-items-center justify-content-center text-white bg-secondary">
        <div class = "w-75 p-3 bg-danger  border-dark border border-4">
        <h2>Nº {num_poke}</h2>
          <Pokemon imagem = {pokemon.sprites.front_default} nome = {pokemon.name} tipo = {pokemon.types.map(type => type.type.name).join(",")} habilidades = {pokemon.abilities.map(ability => ability.ability.name).join(",")} ataques = {pokemon.moves.slice(0,2).map(move => move.move.name).join(" / ")}  ataques_2 = {pokemon.moves.slice(2,4).map(move => move.move.name).join(" / ")}/>
          
          <div class = "row justify-content-around">
            <button class="btn btn-secondary btn-lg col-4" onClick={Voltar}>Voltar</button>
            <button class="btn btn-secondary btn-lg col-4" onClick={Proximo}>Proximo</button>
          </div>
        </div>
        
        
      </div>
    :
    <div class=" col-md-12 text-center d-flex align-items-center justify-content-center text-white bg-secondary">
      <div class="w-75 p-3 bg-danger  border-dark border border-4">
        <button class="btn  btn-secondary " onClick={Carregar}>Carregar</button>
      </div>
    </div>
  );
}

export default App;
