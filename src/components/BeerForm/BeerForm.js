import { useState } from "react";
import "./BeerForm.css";
import { Header } from "../../components";

export function BeerForm() {
  const [beerName, setBeerName] = useState("");
  const [beerTagline, setBeerTagline] = useState("");
  const [beerDescription, setBeerDescription] = useState("");
  const [beerFirstBrewed, setBeerFirstBrewed] = useState("");
  const [beerBrewersTips, setBeerBrewersTips] = useState("");
  const [beerAttLevel, setBeerAttLevel] = useState();
  const [beerContrBy, setBeerContrBy] = useState("");

  const handleName = e => setBeerName(e.target.value);
  const handleTagline = e => setBeerTagline(e.target.value);
  const handleDescription = e => setBeerDescription(e.target.value);
  const handleFirstBrewed = e => setBeerFirstBrewed(e.target.value);
  const handleBrewersTips = e => setBeerBrewersTips(e.target.value);
  const handleAttLevel = e => setBeerAttLevel(e.target.value);
  const handleContrBy = e => setBeerContrBy(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
        method: "POST",
        body: JSON.stringify({
          name: beerName,
          tagline: beerTagline,
          description: beerDescription,
          first_brewed: beerFirstBrewed,
          brewers_tips: beerBrewersTips,
          attenuation_level: beerAttLevel,
          contributed_by: beerContrBy
        }),
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
      });
      await res.json();
      if (res.status === 200) {
        setBeerName("");
        setBeerTagline("");
        setBeerDescription("");
        setBeerFirstBrewed("");
        setBeerBrewersTips("");
        setBeerAttLevel();
        setBeerContrBy("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={beerName} onChange={handleName} placeholder="Name of the beer" />
          <label>Tagline</label>
          <input type="text" className="form-control" value={beerTagline} onChange={handleTagline} placeholder="Tagline of the beer" />
          <label>Description</label>
          <textarea rows="5" className="form-control" value={beerDescription} onChange={handleDescription} placeholder="Decription of the beer" style={{resize: "vertical"}}></textarea>
          <label>First Brewed</label>
          <input type="text" className="form-control" value={beerFirstBrewed} onChange={handleFirstBrewed} placeholder="First brewed in ..." />
          <label>Brewers Tips</label>
          <input type="text" className="form-control" value={beerBrewersTips} onChange={handleBrewersTips} placeholder="Brewery tips to serve the beer" />
          <label>Attenuation Level</label>
          <input type="number" className="form-control" value={beerAttLevel} onChange={handleAttLevel} placeholder="Attenuation level of the beer" />
          <label>Contributed By</label>
          <input type="text" className="form-control" value={beerContrBy} onChange={handleContrBy} placeholder="Contrinuted by who" />
        </div>
        <button className="form-btn" type="submit">Add New</button>
      </form>
    </div>
  );
}
