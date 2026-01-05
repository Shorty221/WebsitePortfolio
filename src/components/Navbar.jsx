//Navbar, this is where you can select where you want to go but so far I don't have anything to add yet
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand py-3 shadow-sm">
      <div className="container justify-content-center">
        <div className="navbar-nav">
          <Link className="nav-link text-light fs-5" to="/">
            Home
          </Link>
          <Link className="nav-link text-light fs-5" to="/video">
            {/*Video*/}
          </Link>
        </div>
      </div>
    </nav>
  );
}
