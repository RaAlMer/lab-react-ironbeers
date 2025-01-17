import { useEffect, useState } from "react";
import "./Beer.css";
import { useParams } from "react-router-dom";
import { Header, Spinner } from "../../components";

export function Beer({ setIsLoading, isLoading }) {
  const [beer, setBeer] = useState("");
  const { beerId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
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
