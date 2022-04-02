import { Link } from "react-router-dom";
import "./Header.css";
import { IoBeerSharp } from "react-icons/io5";

export function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <IoBeerSharp />
      </Link>
    </div>
  );
}
