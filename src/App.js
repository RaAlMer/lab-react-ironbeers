import "./App.css";
import { Home, BeersList, Beer, BeerForm, RandomBeer } from "./components";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((data) => data.json())
      .then((data) => {
        setBeers(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/beers"
          element={<BeersList beers={beers} isLoading={isLoading} />}
        />
        <Route path="/random-beer" element={<RandomBeer isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path="/new-beer" element={<BeerForm isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route
          path="/beers/:beerId"
          element={<Beer isLoading={isLoading} setIsLoading={setIsLoading} />}
        />
      </Routes>
    </div>
  );
}

export default App;

