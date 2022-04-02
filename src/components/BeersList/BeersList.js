import { Link } from "react-router-dom";
import "./BeersList.css";
import { Header, Spinner } from "../../components";

export function BeersList({ beers, isLoading }) {
  return (
    <div>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        beers.map((beer) => (
          <Link className="beer_list" key={beer._id} to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt={beer.name} />
            <div>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <small>
                <b>Created by:</b> {beer.contributed_by}
              </small>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
