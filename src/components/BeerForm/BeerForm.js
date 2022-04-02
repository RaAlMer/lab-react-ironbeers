import { useEffect, useState } from "react";
import "./BeerForm.css";
import { Header, Spinner } from "../../components";

export function BeerForm({ isLoading, setIsLoading }) {
  const [beerName, setBeerName] = useState("");
  const [beerTagline, setBeerTagline] = useState("");
  const [beerDescription, setBeerDescription] = useState("");
  const [beerFirstBrewed, setBeerFirstBrewed] = useState("");
  const [beerBrewersTips, setBeerBrewersTips] = useState("");
  const [beerAttLevel, setBeerAttLevel] = useState(0);
  const [beerContrBy, setBeerContrBy] = useState("");

  /* useEffect(() => {
    setIsLoading(true);
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((data) => data.json())
      .then((data) => {
        setBeer(data);
        setIsLoading(false);
      });
  }, []);
 */
  return (
    <div>
      <Header />
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={beerName} />
          <label>Tagline</label>
          <input type="text" className="form-control" value={beerTagline} />
          <label>Description</label>
          <input type="text" className="form-control" value={beerDescription} />
          <textarea></textarea>
          <label>First Brewed</label>
          <input type="text" className="form-control" value={beerFirstBrewed} />
          <label>Brewers Tips</label>
          <input type="text" className="form-control" value={beerBrewersTips} />
          <label>Attenuation Level</label>
          <input type="number" className="form-control" value={beerAttLevel} />
          <label>Contributed By</label>
          <input type="text" className="form-control" value={beerContrBy} />
        </div>
        <button type="submit">Add New</button>
      </form>
    </div>
  );
}
