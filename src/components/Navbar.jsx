import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <div className="container">
        <span className="navbar-brand">Portfolio</span>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/video">
            Video
          </Link>
        </div>
      </div>
    </nav>
  );
}
