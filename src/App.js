import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";
import PokemonList from "./components/PokemonList/PokemonList";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
  );
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [totalCount, setTotalCount] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    axios.get(currentUrl).then((result) => {
      console.log(result.data);
      setLoading(false);
      setPokemons(result.data.results.map((p) => p.name));
      setNextUrl(result.data.next);
      setPrevUrl(result.data.previous);
      setTotalCount(result.data.count);
    });
  }, [currentUrl]);

  function handleNextClick() {
    setCurrentUrl(nextUrl);
    setSelectedPage((prevPage) => prevPage + 1);
  }

  function handlePrevClick() {
    setCurrentUrl(prevUrl);
    setSelectedPage((prevPage) => prevPage - 1);
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      {loading ? (
        <div> Loading... </div>
      ) : (
        <PokemonList pokemons={pokemons}></PokemonList>
      )}
      <Pagination
        handleNext={handleNextClick}
        handlePrev={handlePrevClick}
        nextUrl={nextUrl}
        prevUrl={prevUrl}
        count={totalCount}
        selectedPage={selectedPage}
      ></Pagination>
    </div>
  );
}

export default App;
