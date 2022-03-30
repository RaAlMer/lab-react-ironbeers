import "./Home.css";
import { Link } from "react-router-dom";
import Beers from "../../assets/beers.png";
import randomBeer from "../../assets/random-beer.png";
import newBeer from "../../assets/new-beer.png";

export function Home() {
  return (
    <div className="Home">
      <Link to="/beers">
        <img src={Beers} alt="Beer" />
        <h3>All Beers</h3>
        <p>Changing children's Grma look raining filled loyalty wealth moving parts. Kingdom immortal unprotected squeal relations rock Ered crispy door's bestow. Empty mix offering quarry fortune nervous plunge news approach World lot? Resilient colleague bidden Dotard lie panic shakes beards stew. Ending blessings move Dinner black bereft posts. </p>
      </Link>
      <Link to="/random-beer">
        <img src={randomBeer} alt="Beer" />
        <h3>Random Beer</h3>
        <p>Crawling Entwives pa admirable trying sewer crows confess months sweet-taking startled pot. Lets are swear wondering foot Galadriel scales smelt. Henceforth belt Treebeard's? Gandalf's death was not in vain. Nor would he have you give up hope. Perhaps nose bond saying little cruelty spears dancing Havens. Pouf goat-riding deceive fierce masters Gollum adventures sadness mistake!</p>
      </Link>
      <Link to="/new-beer">
        <img src={newBeer} alt="Beer" />
        <h3>New Beer</h3>
        <p>Hooter crash inquisitive dawn caverns deluge lords World? Allowed tub-trading dealt Treebeard's torment scouts shields sour trees hurt worm. Sam... I'm glad you are with me. Arts enchanted Barad-dur threat? Fealty let soft desperate attached forebears glows knows Celeborn fortune. Arrived mash poisonous Goblin-men kin. Yours helpful deadly reclaiming judgment Galeton sort?</p>
      </Link>
    </div>
  );
}
