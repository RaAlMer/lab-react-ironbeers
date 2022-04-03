import "./App.css";
import { Home, BeersList, Beer, BeerForm, RandomBeer } from "./components";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((data) => data.json())
      .then((data) => {
        setBeers(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}`)
      .then((data) => data.json())
      .then((data) => {
        setBeers(data);
        setIsLoading(false);
      });
  }, [searchTerm]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/beers"
          element={<BeersList beers={beers} isLoading={isLoading} search={searchTerm} setSearchTerm={setSearchTerm} />}
        />
        <Route
          path="/random-beer"
          element={
            <RandomBeer isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
        <Route path="/new-beer" element={<BeerForm />} />
        <Route
          path="/beers/:beerId"
          element={<Beer isLoading={isLoading} setIsLoading={setIsLoading} />}
        />
      </Routes>
    </div>
  );
}

export default App;
