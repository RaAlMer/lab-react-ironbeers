import { useEffect, useState } from "react";
import "./RandomBeer.css";
import { Header, Spinner } from "../../components";

export function RandomBeer({ setIsLoading, isLoading }) {
  const [beer, setBeer] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((data) => data.json())
      .then((data) => {
        setBeer(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="beer">
          <img src={beer.image_url} alt={beer.name} />
          <div>
            <div className="name">
              <p>{beer.name}</p>
              <p style={{ color: "gray" }}>{beer.attenuation_level}</p>
            </div>
            <div className="tagline">
              <p style={{ color: "gray" }}>{beer.tagline}</p>
              <p style={{ fontWeight: "bold" }}>{beer.first_brewed}</p>
            </div>
            <p>{beer.description}</p>
            <small style={{ color: "gray" }}>{beer.contributed_by}</small>
          </div>
        </div>
      )}
    </div>
  );
}
